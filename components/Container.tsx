import styles from '../styles/Container.module.scss'

interface ContainerProps {
  children: React.ReactNode
}

const Container = ({ children }: ContainerProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>{children}</div>
  )
}

export default Container