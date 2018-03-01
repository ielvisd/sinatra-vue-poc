require 'sinatra'

set :root, File.dirname(__FILE__)
set :public_folder, Proc.new { File.join(root, 'public') }
set :views, Proc.new { File.join(root, 'views') }

get '/:dashboard' do |dashboard|
  erb :layout, :locals => { :dashboard => dashboard }
end
