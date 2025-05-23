import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import { AppStateProvider } from './components/AppStateProvider/AppStateProvider';
import Header from './components/Header/Header';
import { MainContent } from './components/MainContent/MainContent';
import { CloudTalkLogo } from './icons/CloudTalkLogo';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appContainer: {
      position: 'relative',
      width: `calc(100% - ${theme.brandSidebarWidth}px)`,
      height: '100%',
      background: theme.backgroundColor,
      overflow: 'hidden',
      [theme.breakpoints.between('md', 1280)]: {
        width: `calc(100% - ${theme.tabletBrandSidebarWidth}px)`,
      },
      [theme.breakpoints.down('sm') + theme.includeLandscapeMd]: {
        width: '100%',
        overflowY: 'auto',
      },
    },
    brandSidebar: {
      background: '#0420d5',
      position: 'fixed',
      top: 0,
      bottom: 0,
      right: 0,
      left: `calc(100% - ${theme.brandSidebarWidth}px)`,
      [theme.breakpoints.between('md', 1280)]: {
        left: `calc(100% - ${theme.tabletBrandSidebarWidth}px)`,
      },
      [theme.breakpoints.down('sm') + theme.includeLandscapeMd]: {
        display: 'none',
      },
    },
    cloudTalkLogo: {
      position: 'fixed',
      right: 20,
      bottom: 60,
      width: 60,
      height: 60,
      zIndex: 1001,
      '& svg': {
        width: '100%',
        height: '100%',
      },
    },
    footer: {
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      textAlign: 'center',
      padding: '10px 0',
      background: 'rgba(255, 255, 255, 0.9)',
      borderTop: '1px solid #E1E3EA',
      zIndex: 1000,
      '& a': {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        '&:hover': {
          textDecoration: 'underline',
        },
      },
      [theme.breakpoints.down('sm') + theme.includeLandscapeMd]: {
        paddingRight: 0,
      },
    },
  })
);

function App() {
  const classes = useStyles();

  return (
    <AppStateProvider>
      <div className={classes.appContainer}>
        <Header />
        <MainContent />
        <div className={classes.brandSidebar}>
        </div>
        
        <div className={classes.cloudTalkLogo}>
          <CloudTalkLogo />
        </div>
        
        <div className={classes.footer}>
          <Typography variant="caption" color="textSecondary">
            © 2025{' '}
            <a href="https://www.cloudtalk.io" target="_blank" rel="noopener noreferrer">
              CloudTalk
            </a>
            . All rights reserved.
          </Typography>
        </div>
      </div>
    </AppStateProvider>
  );
}

export default App;
