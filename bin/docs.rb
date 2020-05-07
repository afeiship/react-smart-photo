#!/usr/bin/env ruby
require "net/http"
require "json"

TOKEN = ENV["GITHUB_API_TOKEN"]

class DocApp
  def initialize
    @uri = URI("https://api.github.com/repos/afeiship/react-smart-photo/pages")
    @http = Net::HTTP.new(@uri.host, @uri.port)
    @http.use_ssl = true

    @header = {
      'Accept': "application/vnd.github.switcheroo-preview+json",
      'Authorization': "token #{TOKEN}",
      'Content-Type': "application/vnd.api+json",
    }

    @data = {
      "source": {
        "branch": "master",
        "path": "/docs",
      },
    }
  end

  def del
    @req = Net::HTTP::Delete.new(@uri.path, @header)
    @http.request(@req)
  end

  def create
    @req = Net::HTTP::Post.new(@uri.path, @header)
    @req.body = @data.to_json
    @http.request(@req)
  end

  def set_doc
    del
    create

    puts "Has set master/docs to gh-pages!"
  end
end

# start app:
app = DocApp.new
app.set_doc
