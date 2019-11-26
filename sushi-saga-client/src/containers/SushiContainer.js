import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  let sushiSelection = props.sushisInfo.slice(0, 5)

  return (
    <Fragment>
      <div className="belt">
        {
          sushiSelection.map(sushi => <Sushi eatSushiHandler={props.eatSushiHandler} moneyLeft={props.moneyLeft} sushiInfo={sushi}/>)
        }
        <MoreButton buttonHandler={props.buttonHandler}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer