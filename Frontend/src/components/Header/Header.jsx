import './Header.css'
import IconButton from '@mui/material/IconButton'
import { IcBaselineAccountCircle, IcBaselineApps,IcOutlineSettings } from '../../assets/icons.jsx'

export const Header = () => {
    return(
        <div className='header'>
            <div className='left'>
                <IconButton>
                    <IcBaselineAccountCircle />
                </IconButton>
            </div>
            <div className='right'>
                <IconButton>
                    <IcOutlineSettings />
                </IconButton>
                <IconButton>
                    <IcBaselineApps />
                </IconButton>
            </div>
        </div>
    )
}