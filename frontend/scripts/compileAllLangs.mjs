import { execSync } from 'child_process'
import { readdirSync } from 'fs'

const rawDir = 'src/lang/raw'
const outDir = 'src/lang/compiled'

readdirSync('src/lang/raw').forEach((fileName) => {
  // Создаем команду с необходимыми параметрами
  const command = `npm run compile-lang -- ${rawDir}/${fileName} --ast --out-file ${outDir}/${fileName}`

  try {
    // Выполняем команду
    console.log(`Компиляция ${fileName}...`)
    execSync(command, { stdio: 'inherit' })
    console.log(`Успешно скомпилирован: ${outDir}/${fileName}`)
  } catch (error) {
    console.error(`Ошибка компиляции ${fileName}:`, error.message)
  }
})
