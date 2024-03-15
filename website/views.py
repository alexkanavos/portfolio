from flask import Blueprint, render_template


views = Blueprint("views", __name__)


@views.route("/")
def home():

    data_dict = {
        "title": "Alex Kanavos",
        "author": "Alex Kanavos",
        "description": "Portfolio",
    }

    return render_template("index.html", data=data_dict)


@views.route("/about")
def about():

    data_dict = {
        "title": "About | Alex Kanavos",
        "author": "Alex Kanavos",
        "description": "About | Alex Kanavos",
    }

    return render_template("about.html", data=data_dict)


@views.app_errorhandler(404)
def page_not_found(e):
    return render_template("404.html"), 404
