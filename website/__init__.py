from flask import Flask
from datetime import datetime
import os


def create_app():
    app = Flask(__name__)
    app.config["SECRET_KEY"] = os.getenv("PORTFOLIO_FLASK_SECRET_KEY")
    app.url_map.strict_slashes = False

    app.jinja_env.globals.update(
        current_year=datetime.now().year,
        my_name=os.getenv("MY_NAME"),
        my_email=os.getenv("MY_EMAIL"),
    )

    from .views import views

    app.register_blueprint(views, url_prefix="/")

    return app
