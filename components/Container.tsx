import styles from '../styles/Container.module.scss'

interface ContainerProps {
  children: React.ReactNode,
  zIndex?: number
}

const Container = ({ zIndex, children }: ContainerProps): JSX.Element => {
  return (
    <div className={styles.wrapper} style={{ zIndex: zIndex || 'auto' }}>{children}</div>
  )
}

export default Container