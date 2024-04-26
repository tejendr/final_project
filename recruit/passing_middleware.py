from django.conf import settings

class PassingMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response
        self.static_url = settings.STATIC_URL  # Fetch STATIC_URL from settings

    def __call__(self, request):
        # Process the request if needed
        response = self.get_response(request)
        
        # Add static URL to template context
        response.context_data = getattr(response, 'context_data', {})
        response.context_data['static_url'] = self.static_url
        
        return response