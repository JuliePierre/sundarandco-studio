activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

activate :sprockets

page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :asset_hash
  activate :relative_assets
  set :relative_links, true
end

activate :deploy do |deploy|
  deploy.build_before = true
  deploy.deploy_method = :git
end

# Prismic configuration
api = Prismic.api('https://sundarandco.prismic.io/api')
response = api.query(Prismic::Predicates.at("document.type", "project"))
projects = response.results

# Routes
page "/projects.html", locals: { projects: projects }
# projects.each do |project|
#   proxy "/projects/#{project.uid}.html", "/projects/show.html", locals: { project: project }, ignore: true
# end
