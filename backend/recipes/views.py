from rest_framework.views import APIView


class CreateListRecipeView(APIView):
    """Create and list recipes by user request"""

    def get(self, request):
        """GET - lists all the recipes available"""
        pass

    def post(self, request):
        """POST - creates & stores a new recipe"""
        pass


class RetrieveUpdateDeleteRecipeView(APIView):
    """Retrieve, update and delete a particular recipe by user request."""

    def get(self, request, id):
        """GET - retrieves a particular recipe instance"""
        pass

    def put(self, request, id):
        """PUT - updates the details of a recipe"""
        pass

    def delete(self, request, id):
        """DELETE - deletes a particular recipe"""
        pass
