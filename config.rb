require "uglifier"

activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

activate :sprockets

page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

set :fonts_dir, 'fonts'

configure :build do
  activate :minify_css
  activate :minify_javascript, compressor: -> { Uglifier.new(:harmony => true) }
  activate :asset_hash
  activate :relative_assets
  set :relative_links, true
  # Set up fonts
end

activate :deploy do |deploy|
  deploy.build_before = true
  deploy.deploy_method = :git
end

# Prismic configuration
api = Prismic.api('https://sundarandco.prismic.io/api')
response = api.query(Prismic::Predicates.at("document.type", "project"))
clients = response.results

# Routes
page "/clients.html", locals: { clients: clients }

# how to get prismic results
# from projects
#<%= project.uid %>
#<%= project['project.nom_du_projet'].as_html(nil).html_safe %>
#<%= project['project.ville'].as_html(nil).html_safe %>
#<%= project['project.description'].as_html(nil).html_safe %>

helpers do
  def get_clients_list
    api = Prismic.api('https://sundarandco.prismic.io/api')
    response = api.query(Prismic::Predicates.at("document.type", "project"))
    clients = response.results
    clients_list = []
    clients.each do |client|
      clients_list << client.uid
    end
    return clients_list.to_json
  end
end
