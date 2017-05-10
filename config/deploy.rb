# config valid only for current version of Capistrano
lock "3.8.1"

set :application, "todolist"
set :repo_url, "git@github.com:beetlegius/lab-todolist.git"
set :rbenv_ruby, '2.4.0'

# Default branch is :master
# ask :branch, `git rev-parse --abbrev-ref HEAD`.chomp

# Default deploy_to directory is /var/www/my_app_name
set :deploy_to, "/home/beetlegius/apps/todolist"

set :puma_init_active_record, true
set :puma_preload_app, true

set :nginx_server_name, 'todolist.beetlegius.com.ar'

# Default value for :format is :airbrussh.
# set :format, :airbrussh

# You can configure the Airbrussh format using :format_options.
# These are the defaults.
# set :format_options, command_output: true, log_file: "log/capistrano.log", color: :auto, truncate: :auto

# Default value for :pty is false
# set :pty, true

# Default value for :linked_files is []
append :linked_files, 'puma.rb', '.rbenv-vars'

# Default value for linked_dirs is []
append :linked_dirs, "log", "tmp/pids", "tmp/cache", "tmp/sockets", "public/dragonfly", 'public/assets', 'public/shared', 'node_modules'

# Default value for default_env is {}
# set :default_env, { path: "/opt/ruby/bin:$PATH" }
set :default_env, { path: "$PATH:/home/beetlegius/.nvm/versions/node/v7.10.0/bin" }

# Default value for keep_releases is 5
# set :keep_releases, 5

# Skip migration if files in db/migrate were not modified
set :conditionally_migrate, true
