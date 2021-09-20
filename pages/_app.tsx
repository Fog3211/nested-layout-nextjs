import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const Wrapper = Component.Layout ? Component.Layout : (children: React.ReactNode) => <>{children}</>
  return (
    <Wrapper {...pageProps}>
      <Component {...pageProps} />
    </Wrapper>
  )
}

export default MyApp
