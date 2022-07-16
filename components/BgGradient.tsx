import styles from '../styles/BgGradient.module.scss'

const BgGradient = (): JSX.Element => {
  return (
    <div className={`fixed top-0 left-0 w-full h-full ${styles.gradient}`} />
  )
}

export default BgGradient