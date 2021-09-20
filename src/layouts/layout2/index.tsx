import React, { memo, useEffect, useState } from 'react'
import { Header, Tabs } from '..'
import styles from './index.module.scss'

interface Layout2Props {
  children: React.ReactNode
}

const Layout2 = ({
  children
}: Layout2Props) => {

  return (
    <div className={styles['layout1']}>
      <Header />
      <Tabs />
      {children}
    </div>
  )
}

export default memo(Layout2)
