# 🐀 Rémy

Rémy *(from the movie Ratatouille)* is a Discord bot offering its users a modern way to receive notifications when a table becomes available in the restaurants of Disneyland Paris parks and hotels.
Using the [DisneyTables](https://github.com/Romitou/DisneyTables) project specially created for this purpose, users can manage their alerts via the bot and receive messages when a notification is generated by DisneyTables.

**Want to see it in action?** Go to [this Discord server](https://discord.gg/disneyland-paris-notifications-et-entraide-899677077287075930), dedicated to notifications and help around Disneyland Paris.

## Environment variables
* `DISCORD_TOKEN` : the token of your Discord bot
* `BASE_API` : the API address of your DisneyTables instance
* `WEBSERVER_TOKEN` : the DisneyTables API authentication token
* `REDIS_URL` : the address to your Redis server
* `SENTRY_DSN` : the DSN address to your Sentry configuration
