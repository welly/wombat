environment = :development
# environment = :production

# Location of the theme's resources.
assets_dir = "src/_assets/"
fonts_dir = assets_dir + "fonts"
sass_dir = assets_dir + "scss"
css_dir = "build/assets/css"
images_dir = "build/assets/images"
javascripts_dir = "build/assets/javascript"

# Require any additional compass plugins installed on your system.
require 'breakpoint'
require 'breakpoint-slicer'
require 'compass'
require 'sassy-maps'

# Disable cache busting on image assets.
asset_cache_buster :none

# Set default file encoding.
Encoding.default_external = "UTF-8"

# You can select your preferred output style here (can be overridden via the
# command line):
output_style = (environment == :development) ? :expanded : :compressed

# To enable relative paths to assets via compass helper functions. Since Drupal
# themes can be installed in multiple locations, we don't need to worry about
# the absolute path to the theme from the server root.
relative_assets = true

# Show debugging comments during development.
line_comments = (environment == :development) ? true : false

# Show debug information / partial location for FireSass and similar tools.
# Uncomment to enable.
debug = (environment == :development) ? true : false

# Add sourcemap during development.
sourcemap = true

# Output debugging info in development mode.
sass_options = (environment == :development && debug == true) ? {:debug_info => true} : {}

# Increased decimal precision.
# 33.33333% instead of 33.333%
Sass::Script::Number.precision = 3