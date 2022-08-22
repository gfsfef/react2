import {styled} from '@mui/system';

export const MainDiv = styled("div") ({
    display: "flex",
    '& *' : {
        fontFamily: 'Inter, sans-serif',
    },
    '& .sidebar' : {
    backgroundColor: '#03211A',
        width: "4.87%",
        minWidth: '70px',
        maxWidth: '80px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '0',
        height: '100vh',
    },
    '& .mainMenu' : {
        backgroundColor: '#F5F6FF',
        width: "17.8%",
    },
    '& .projects' : {
        backgroundColor: '#F8FBFA',
        width: "77.33%",
    },
    '& .pjtBackground' : {
        margin: '0 auto', 
        backgroundColor: 'white',
        width: "73vw",
        height: '90.8vh',
        marginTop: '17px',
        borderRadius: '16px'
    },
    '& .pp' : {
        width: "40px",
        height: "40px",
        margin: '37px auto auto 10px',
    },
    '& .arrow' : {
        color: 'white',
        transform: 'rotate(90deg)',
        width: '40px',
        margin: '0 0 22px 10px',
        height: '40px'
    },
    '& .mntopic' : {
        fontSize: '15px',
        fontWeight: '700',
        marginBottom: '35px',
        maxWidth: '160px',
        width: '90%',
        marginLeft: '38px'
    },
    '& .selected' : {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        width: '180px',
        margin: 'auto',
        height: '40px',
        paddingTop: '7px',
        paddingBottom: '7px',
        borderRadius: '16px'
    },
    '& .line' : {
        height: '0.1px',
        margin: '0 auto',
        width: '190px',
        marginTop: '10px',
        backgroundColor: '#D9D9D9'
    },
    '& .pjticon' : {
        width: '33px',
        height: '23px',
        marginTop: '7px',
        marginLeft: '12px'
    },
    '& .legend' : {
        backgoundColor: '#F8FBFA',
        width: '217px',
        height: '120px',
    },
    '& .color' : {
        width: '11px',
        borderRadius: '50%',
        marginLeft: '14px',
        height: '11px'
    },
    '& .priority' : {
        fontWeight: '700',
        fontSize: '9px',
        marginTop: '0px',
        marginLeft: '10px'
    },
    '& .divlegend' : {
        display: 'flex',
        justifyContent: 'row'
    },
    '& .svg-chart-container' : {
        height: '460px',
        border: 'none',
    },
    '& .letter' : {
        fontFamily: 'sans-serif', 
        marginLeft: '51px',
        boxSizing: 'border-box',
        paddingTop: '36px',
        fontSize: '19px',
        fontWeight: '550'
    }
})