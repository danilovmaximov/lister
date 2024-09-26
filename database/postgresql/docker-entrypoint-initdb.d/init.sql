-- To rebuilt all tables after structure changes  uncomment this:

DROP TABLE IF EXISTS public.Stage;
DROP TABLE IF EXISTS public.Task;
DROP TABLE IF EXISTS public.STATUSES;
DROP TABLE IF EXISTS public.Users;
DROP TABLE IF EXISTS public.List;


-- Users' information tables:
CREATE TABLE public.Users (
    id SERIAL PRIMARY KEY,
    "name" VARCHAR(100) NOT NULL,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE public.List (
    id SERIAL PRIMARY KEY,
    "label" VARCHAR(100) NOT NULL,
    "text" VARCHAR(300),
    CONSTRAINT alphabet_or_numbers_in_label CHECK ("label" ~ '^[a-zA-Z0-9]+$')
);

CREATE TABLE public.Stage (
    id SERIAL PRIMARY KEY,
    list_id SERIAL REFERENCES List(id),
    "name" VARCHAR(100) NOT NULL,
    order_value SMALLINT NOT NULL,
    CONSTRAINT alphabet_or_numbers_in_stage CHECK ("name" ~ '^[a-zA-Z0-9]+$')
);

CREATE TABLE public.Statuses ( -- Statuses for checkbox
	status_name VARCHAR(50) UNIQUE NOT NULL PRIMARY KEY
);

CREATE TABLE public.Task (
    id SERIAL PRIMARY KEY,
    "label" VARCHAR(100) NOT NULL,
    due_date DATE, -- Assuming due_date_is_less_than_current is handled in application code
    "text" VARCHAR(400) NOT NULL,
    author SERIAL REFERENCES Users(id),     -- a person, who gave a task
    assignee SERIAL REFERENCES Users(id),   -- a person, whom the task was given to
    list_id SERIAL REFERENCES List(id),
    status VARCHAR(50) REFERENCES Statuses(status_name),
    CONSTRAINT status_value CHECK (status IN ('Pending', 'In Progress', 'Completed'))
);




-- System tables: 
-- (For further steps)
/*
CREATE TABLE Metadata (
	id SERIAL PRIMARY KEY,
	task_id REFERENCES List(id),
	"key" TEXT NOT NULL,
	"text" TEXT NOT NULL,
	"number" DOUBLE NOT NULL,
	"date" TIMESTAMP WITHOUT TIME ZONE NOT NULL
);

CREATE TABLE Logs (
	id SERIAL PRIMARY KEY,
);

CREATE TABLE Events (
	id SERIAL PRIMARY KEY,
);

*/

