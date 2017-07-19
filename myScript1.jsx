var message = "You have started myScript1";
var err = function err(errString) {
    alert(errString);
    }
app.onError = err;

alert(message);

app.newProject();

// Make first comp

var compName = "Comp0";
app.project.items.addComp(compName, 640, 480, 1, 60, 60);

// Grab the first comp

var firstComp = app.project.item(1);
var layerCollection = firstComp.layers;

// Define colors, other solid parameters

var color = [0.2, 0.3, 0.4];
var layerName = "Layer0";
var layerWidth = 640;
var layerHeight = 480;
var layerAspect = 1;
var layerDuration = 60;

// Add Solid Layer

layerCollection.addSolid(color, layerName, layerWidth, layerHeight, layerAspect, layerDuration);