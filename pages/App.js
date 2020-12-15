/*jshint esversion: 8 */
import { React, html } from "../web_modules/preact-htm/index.js";
import { Dialog } from "../web_modules/material-ui/index.js";
import { TextField } from "../web_modules/material-ui/index.js";
import { Button } from "../web_modules/material-ui/index.js";
import { DialogActions } from "../web_modules/material-ui/index.js";
import { DialogContent } from "../web_modules/material-ui/index.js";
import { DialogContentText } from "../web_modules/material-ui/index.js";
import { DialogTitle } from "../web_modules/material-ui/index.js";
import { makeStyles } from "../web_modules/material-ui/index.js";
import { Slide } from "../web_modules/material-ui/index.js";
import { Card } from "../web_modules/material-ui/index.js";
import { CardActionArea } from "../web_modules/material-ui/index.js";
import { CardActions } from "../web_modules/material-ui/index.js";
import { CardHeader } from "../web_modules/material-ui/index.js";
import { CardContent } from "../web_modules/material-ui/index.js";
import { CardMedia } from "../web_modules/material-ui/index.js";
import { Collapse } from "../web_modules/material-ui/index.js";
import { Avatar } from "../web_modules/material-ui/index.js";
import { IconButton } from "../web_modules/material-ui/index.js";
import { Icon } from "../web_modules/material-ui/index.js";

const useStyles4basic = makeStyles(theme => ({
  item : {
    margin: theme.spacing(1)
  },
  container : {
    padding: theme.spacing(1)
  }
}));
const useStyles4Modal = makeStyles(theme => ({
  root:{
    display: 'flex',
    alignItems:'center',
    justifyContent:'center'
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

const App = props => {
    const styles_basic = useStyles4basic(props||{});
const style_modal = useStyles4Modal();
    const [defaultState, setDefaultState] = React.useState({
    });

    return html`
        <${React.Fragment}>
            <${Dialog} open=${ props && props.open || defaultState.open || false } onClose=${ ()=>setDefaultState(Object.assign({}, defaultState, { open: false }))} fullWidth aria-labelledby="alert_hwimz2qt_title" aria-describedby="alert_hwimz2qt_description" key="fajk6eof">
                <${DialogTitle} id="alert_hwimz2qt_title">
                    ${ defaultState.title || 'Alert Title' }
                </${DialogTitle}>
                <${DialogContent}>
                    <${DialogContentText} id="alert_hwimz2qt_description">
                        ${ defaultState.description || 'Alert Description' }
                    </${DialogContentText}>
                </${DialogContent}>
                <${DialogActions}>
                    <${Button} onClick=${ ()=>setDefaultState(Object.assign({}, defaultState, { open: false }))} color="primary">
                        OK
                    </${Button}>
                </${DialogActions}>
            </${Dialog}>
            <${Card} className=${styles_basic.container + ' ' + styles_basic.item} style=${{"max-width":"300px","display":"inline-block"}} key="kg3et8m3">
                <${CardHeader} avatar=${ html`<${Avatar} aria-label='recipe'>R</${Avatar}>` } action=${ html`<${IconButton} aria-label='settings'><${Icon}>more_horiz</${Icon}></${IconButton}>` } title="Shrimp and Chorizo Paella" subheader="September 14, 2016">
                </${CardHeader}>
                <${CardMedia} image="img/pic.png" title="Paella dish" style=${{"padding-top":"75%","background-size":"contain","height":"0"}}>
                </${CardMedia}>
                <${CardContent}>
                    Less content...
                </${CardContent}>
                <${CardActions} disableSpacing>
                    <${IconButton}>
                        <${Icon}>
                            share
                        </${Icon}>
                    </${IconButton}>
                    <${IconButton}>
                        <${Icon}>
                            favorite
                        </${Icon}>
                    </${IconButton}>
                    <${IconButton} style=${{"margin-left":"auto"}} onClick=${ e => setDefaultState(Object.assign({}, defaultState, {'expanded_a': !defaultState['expanded_a']})) }>
                        <${Icon}>
                            ${ !!defaultState['expanded_a'] ? 'expand_more' : 'expand_less' }
                        </${Icon}>
                    </${IconButton}>
                </${CardActions}>
                <${Collapse} in=${ !!defaultState['expanded_a'] } timeout="auto" unmountOnExit>
                    <${CardContent}>
                        More content...
                    </${CardContent}>
                </${Collapse}>
            </${Card}>
        </${React.Fragment}>
    `;
};

export default App;