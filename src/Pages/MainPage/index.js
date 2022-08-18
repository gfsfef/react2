import * as React from 'react';
import { MainDiv } from './global';
import PPlogo from '../../Assets/pplogo.png';
import PjtIcon from '../../Assets/pjticon.png';
import Paper from '@mui/material/Paper';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';



export default function MainPage() {
    return(
    <MainDiv>
        <div className='sidebar' >
            <img src={PPlogo} className='pp'/>
            <ArrowCircleDownIcon className='arrow'/>
        </div>  
        <Paper className='mainMenu'>
            <p className='mntopic' style={{marginTop: '91px'}}>Suas Metas</p>
            <p className='mntopic'>Metas do Time</p>
            <p className='mntopic'>Metas da área</p>
            <p className='mntopic'>Navegar pelas metas da organização</p>
            <div className='line'> </div>
            <img src={PjtIcon} className='pjticon'/>
            <p className='mntopic'>Legendas:</p>
            <div className='legend'>
                <div className='divlegend'>
                    <div className='color' style={{backgroundColor: '#000000'}}></div>
                    <p className='priority'> 0 - Urgente </p>
                </div>
                <div className='divlegend'>
                    <div className='color' style={{backgroundColor: '#B30A05'}}></div>
                    <p className='priority'> 1 - Altíssima Prioridade </p>
                </div>
                <div className='divlegend'>
                    <div className='color' style={{backgroundColor: '#DE4303'}}></div>
                    <p className='priority'> 2 - Alta Prioridade </p>
                </div>
                <div className='divlegend'>
                    <div className='color' style={{backgroundColor: '#FF850C'}}></div>
                    <p className='priority'> 3 - Média Prioridade </p>
                </div>
                <div className='divlegend'>
                    <div className='color' style={{backgroundColor: '#E7AC10'}}></div>
                    <p className='priority'> 4 - Baixa Prioridade </p>
                </div>
            </div>
        </Paper>
        <div className='projects'>
        <div className='pjtBackground'>
            <div class="chart-container"> <p className='letter'>ÁRVORE OKR'S</p></div>
        </div>
        </div>
    </MainDiv>
     )
}