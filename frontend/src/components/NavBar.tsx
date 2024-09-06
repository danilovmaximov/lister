import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'

export function NavBar() {
  return (
    <div className="row-span-2 flex max-w-[16rem] flex-col gap-10 px-12 py-6">
      <h3 className="font-serif text-4xl italic">Lister</h3>
      <Link to="/indox">
        <FormattedMessage id="navbar.inbox" defaultMessage="Inbox" />
      </Link>
      <Link to="/today">
        <FormattedMessage id="navbar.today" defaultMessage="Today" />
      </Link>
      <Link to="/important">
        <FormattedMessage id="navbar.important" defaultMessage="Important" />
      </Link>
    </div>
  )
}
