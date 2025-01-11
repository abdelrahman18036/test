window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  DS.appState.setVolume(0); //mute 

}

window.Script2 = function()
{
  DS.appState.setVolume(1);//play sound


}

window.Script3 = function()
{
  DS.appState.setVolume(0); //mute 

}

window.Script4 = function()
{
  DS.appState.setVolume(1);//play sound


}

window.Script5 = function()
{
  DS.appState.setVolume(0); //mute 

}

window.Script6 = function()
{
  DS.appState.setVolume(1);//play sound


}

window.Script7 = function()
{
  DS.appState.setVolume(0); //mute 

}

};
