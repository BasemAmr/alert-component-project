import React, { FC, ReactNode } from 'react'
import './index.scss'
import { BellRing, CircleX } from 'lucide-react'

interface AlertBoxProps {
    type: string,
    icon: ReactNode,
    title: string,
    description: string
}



const AlertBox: FC<AlertBoxProps> = ({type, icon, title, description}) => {
    // const {type, icon, title, description} = props;

  return (
    <div className={type}>
        <div className="alert-header">
            <div>
                {icon}
                <h3>{title}</h3>
            </div>
            <CircleX className='close'/>
        </div>
        <p>{description}</p>
        
    </div>
  )
}

export default AlertBox