client.on("ready", () => {
  setInterval(() => {
    console.log(
      `${client.user.username} ready! ,Users ${client.guilds.cache.reduce(
        (a, g) => a + g.memberCount,
        0
      )}, Guilds ${client.guilds.cache.size}`
    );
    client.user.setActivity(
      `+help ,Users ${client.guilds.cache.reduce(
        (a, g) => a + g.memberCount,
        0
      )}, Guilds ${client.guilds.cache.size}`
    );
  }, 15000);
});
