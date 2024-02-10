
//instead of using styles.css link in index.html head area,
//it will load css from here via files made by webpack and css preprocessors
import '../styles/styles.css';

//there was an alert(message) at the bottom of this script at one point, and it was noticed that the styling impact of this styles.css wasn't being applied until after the alert message was closed, as though it needed to run this whole script before the css could be applied
//removing that alert() makes the css styling appear immediately, without the text flashing black first before changing colour
