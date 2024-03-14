from flask import Blueprint, render_template


views = Blueprint("views", __name__)


@views.route("/")
def home():
    return render_template("index.html")


@views.route("/about")
def about():
    return render_template("about.html")


@views.route("/projects")
def projects():
    return render_template("projects.html")


@views.route("/contact")
def contact():
    return render_template("contact.html")


@views.app_errorhandler(404)
def page_not_found(e):
    return render_template("404.html"), 404
