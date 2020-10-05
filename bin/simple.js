#!/usr/bin/env node

// initiate the app
const app = require('commander')

// import the commands
const dev       = require('../lib/cmd/dev')
const build     = require('../lib/cmd/build')
const deploy    = require('../lib/cmd/deploy')
const teardown  = require('../lib/cmd/teardown')
const logs      = require('../lib/cmd/logs')
const migration = require('../lib/cmd/migration')
const migrate   = require('../lib/cmd/migrate')
const doctor    = require('../lib/cmd/doctor')

// dev
app
  .command('dev')
  .description('Run and develop the app, locally')
  .action(function () {
    dev()
  })

// build
app
  .command('build')
  .description('Ensure the app compiles')
  .action(function () {
    build()
  })

// deploy
app
  .command('deploy')
  .description('Deploy the app live')
  .action(function () {
    deploy()
  })

// teardown
app
  .command('teardown')
  .description('Tear down a deployment')
  .action(function () {
    teardown()
  })

// logs
app
  .command('logs')
  .description('Connect to a deployment and stream logs')
  .action(function () {
    logs()
  })

// migration
app
  .command('migration')
  .description('Create a database migration')
  .action(function () {
    migration()
  })

// migrate
app
  .command('migrate')
  .description('Run pending migrations')
  .action(function () {
    migrate()
  })
  
// doctor
app
  .command('doctor')
  .description('Verify installation and configuration')
  .action(function () {
    doctor()
  })

// run the app!
app.parse(process.argv)
