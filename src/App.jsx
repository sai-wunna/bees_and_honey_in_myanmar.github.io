import Nature from './pages/Nature'
import AppWrapper from './components/wrappers/AppWrapper'
import { useSelector } from 'react-redux'
import { Suspense, lazy } from 'react'
import { delayTime } from './helpers/delayTimer'
import { LoadingDots } from './components/loading/Loading'
const Benefits = lazy(() => delayTime(import('./pages/Benefits'), 500))
const About = lazy(() => delayTime(import('./pages/About'), 500))

const App = () => {
  const { nature, benefits, about } = useSelector((store) => store.navigator)
  return (
    <AppWrapper>
      {nature && <Nature />}
      {benefits && (
        <Suspense fallback={<LoadingDots />}>
          <Benefits />
        </Suspense>
      )}
      {about && (
        <Suspense fallback={<LoadingDots />}>
          <About />
        </Suspense>
      )}
    </AppWrapper>
  )
}

export default App
