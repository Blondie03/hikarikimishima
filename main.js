var Botkit = require('botkit');

var controller = Botkit.slackbot({
  clientId: '21369156806.280797684372',
  clientSecret: '90aaf662e00556da3ac88a817c0dd8a7',
  studio_token: 'tCTC2Imou665pNsGfsBsBspD',
});
controller.configureSlackApp({clientId: '21369156806.280797684372',
clientSecret: '90aaf662e00556da3ac88a817c0dd8a7',
studio_token: 'tCTC2Imou665pNsGfsBsBspD',
scopes:['channels:write', 'chat:write:user', 'chat:write:bot']})

controller.setupWebserver(8000,function(err,webserver) {
    controller.createWebhookEndpoints(controller.webserver);
    controller.createOauthEndpoints(controller.webserver);
});

controller.hears('hello','direct_mention,direct_message', function(bot, message) {

  bot.reply(message,'Howdy!');

});

var bot = controller.spawn({})

bot.startRTM(function(err,bot,payload) {
  if (err) {
    throw new Error('Could not connect to Slack');
  }
});
bot.sendWebhook({
  text: 'whatever',
  channel:'#botspam',
});
