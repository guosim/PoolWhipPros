import webapp2
import jinja2
import os
import hmac

template_dir = os.path.join(os.path.dirname(__file__)) #my template directory will be the current directory I'm in, /templates
jinja_env = jinja2.Environment(loader = jinja2.FileSystemLoader(template_dir), autoescape = True) #when we render templates, jinja will look for templates in dir above



class Handler(webapp2.RequestHandler):
	### helper functions
	def write(self, *a, **kw):
		self.response.out.write(*a, **kw)

	def render_str(self, template, **params):
		t = jinja_env.get_template(template)
		return t.render(params)
		
	def render(self, template, **kw):
		self.write(self.render_str(template, **kw))

class FrontPage(Handler):
	def get(self):
		self.render("index.html")

app = webapp2.WSGIApplication([
    ('/', FrontPage),
], debug=True)