# Taisthive — Share Your Tastes

Taisthive is the ultimate online community for foodies on the internet. It provides a platform for you to:
- Create and share your favorite recipes with other users
- View recipes created by other users
- Update and Delete your recipes
- Even provides a basic profile of you the user so that you can easily share your identity with the rest of the world.

**NOTE:** _Taisthive is still in development as at this point in time and is not yet complete. So, if you do decide to visit the link attached above, please understand that what you see is just the M.V.P and not the finished product. And, if you have ideas, feel free to share them with me as I'm always looking for ways to make Taisthive a more useful and helpful product that can indeed help you meet your needs._


### Getting Started:

1. Clone the Github repository and `cd` into it:
    ```
      git clone https://github.com/PC-Ngumoha/taisthive 
      cd taisthive/
    ```

2. Backend Setup:
    ```
      cd backend/
      source env/lib/activate
      pip install -r requirements.txt
      pip manage.py migrate
      pip manage.py runserver
    ```

3. Frontend Setup:
    ```
      cd frontend/
      npm install
      npm run dev
    ```

4. Visit `http://localhost:3000` in your browser in order to start using _taisthive_. Enjoy 😁
