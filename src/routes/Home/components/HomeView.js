import React from 'react'
import { Card, CardTitle } from 'material-ui/Card'
import './HomeView.scss'

export const HomeView = () => (
  <Card className="card-custom">
    <CardTitle title="Хомяк" subtitle="Чувак, это хомяк." />
  </Card>
)

export default HomeView
