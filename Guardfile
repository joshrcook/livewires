# A sample Guardfile
# More info at https://github.com/guard/guard#readme

guard 'sass', :input => 'source/scss', :output => 'httpdocs/css'

guard 'slim', :input_root => 'source/templates', :output_root => 'httpdocs', :slim => { :pretty => true } do
  watch(%r'^.+\.slim$')
end

# guard 'coffeescript', :input => 'source/coffee', :output => 'httpdocs/js'
