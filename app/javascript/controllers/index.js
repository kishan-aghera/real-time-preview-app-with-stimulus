// This file is auto-generated by ./bin/rails stimulus:manifest:update
// Run that command whenever you add a new controller or create them with
// ./bin/rails generate stimulus controllerName

import { application } from './application'

import ApplicationController from './application_controller.js'
application.register('application', ApplicationController)

import ExampleController from './example_controller.js'
application.register('example', ExampleController)

import HelloController from './hello_controller.js'
application.register('hello', HelloController)

import PostController from './post_controller.js'
application.register('post', PostController)
