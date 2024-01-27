from authentication.models import User
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    """serialize data from the user model"""
    class Meta:
        model = User
        fields = ('id', 'email', 'password')

    def create(self, validated_data):
        password = validated_data.pop('password')
        user = User.objects.create(
            email=validated_data.pop('email'), **validated_data)
        user.set_password(password)
        user.save()
        return user

    # def update(self, instance, validated_data):
    #     pass
