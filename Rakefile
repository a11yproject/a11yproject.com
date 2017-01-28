# frozen_string_literal: true

require 'html-proofer'

task :test do
  sh 'bundle exec jekyll build'
  HTMLProofer.check_directory('./_site/', check_html: true).run
end
