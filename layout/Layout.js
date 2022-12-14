import Email from '../components/other/Email'
import Header from '../components/header/Header'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className='bg-body'>{children}</main>
      <Email />
    </>
  )
}