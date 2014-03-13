/*
 Backbone UI News Reader Component
 version:1.0.0

 Author : Ilker Guller (http://ilkerguller.com)
 Description: This plugin can create news reader system with Url and Jquery Path only
 */

(function(window, _, Backbone, $) {
    Backbone.UINewsReader = Backbone.UINewsReader || function(options) {
        var defaults = {
            el: '.ui-newsreader',
            url: '',
            requireImages: true,
            changeUrlPath: true,
            changeTitle: true,
            onParse: function(response) {
                var items = _.filter(response.value.items, function(item, total) {
                    return total <= 30 && (parent.settings.requireImages ? item["media:thumbnail"] || item["media:content"] : true) && (item["description"]);
                });
                return (items.length > 10) ? items.slice(0, 10) : items;
            }
        };

        this.settings = $.extend({}, defaults, options);
        this._uid = _.uniqueId("ui-newsreader-");

        this.$el = {};
        this.$el.UINewsReader = null;
        this.$el.UINewsReaderList = null;
        this.$el.UINewsReaderDetail = null;

        var parent = this,
            $UINewsReaderPath = $(this.settings.el);

        if($UINewsReaderPath.length <= 0) {
            console.error("UI News Reader :: Jquery element not found. Please check settings.");
            return false;
        } else if(this.settings.url == "") {
            console.error("UI News Reader :: Please set URL");
            return false;
        }

        $UINewsReaderPath.addClass("ui-newsreader").attr("id", this._uid);
        $UINewsReaderPath = $("#" + this._uid);

        var __mdlNews = Backbone.Model.extend({
            defaults: {
                title: "",
                description: "",
                link: "",
                imagehtml: ""
            },
            initialize: function() {
                this.set("description", this.getDescription(this.get("description")));
                this.set("imagehtml", this.getImage(this));
            },
            getDescription: function(html) {
                var regex = /(<([^>]+)>)/ig
                    ,body = html
                    ,result = body.replace(regex, "");

                return result.replace(/[&]nbsp[;]/gi, " ");
            },
            getImage: function(model) {
                if(model.get("media:thumbnail")) {
                    return "<img src='" + model.get("media:thumbnail").url + "' width='" + model.get("media:thumbnail").width + "' height='" + model.get("media:thumbnail").height + "' />";
                } else if(model.get("media:content")) {
                    return "<img src='" + model.get("media:content").url + "' width='" + model.get("media:content").width + "' height='" + model.get("media:content").height + "' />";
                }

                return "";
            }
        });

        var __collNewsList = Backbone.Collection.extend({
            model: __mdlNews,
            url: parent.settings.url,
            parse: parent.settings.onParse
        });

        var __viewNews = Backbone.View.extend({
            tagName: "li",
            template: _.template("<a href='<%=link %>'><%=title %></a>"),
            initialize: function(){
                this.render();
            },
            events: {
                "click a": "showDetails"
            },
            render: function() {
                this.$el.html(this.template(this.model.toJSON()));
                return this;
            },
            showDetails: function() {
                if(parent.settings.changeUrlPath) window.location.hash = "/" + encodeURIComponent(this.model.get("title")).replace(/%20/g,'+');
                if(parent.settings.changeTitle) document.title = "Latest News :: " + this.model.get("title");

                parent._modelforNewsDetailView.set("title", this.model.get("title"));
                parent._modelforNewsDetailView.set("description", this.model.get("description"));
                parent._modelforNewsDetailView.set("link", this.model.get("link"));
                parent._modelforNewsDetailView.set("imagehtml", this.model.get("imagehtml"));

                if(!parent.newsdetailView.isRendered) parent.newsdetailView.render();

                parent.$el.UINewsReaderList.hide();
                parent.$el.UINewsReaderDetail.show();
                return false;
            }
        });

        var __viewNewsList = Backbone.View.extend({
            tagName: "ul",
            template: _.template("<a href='<%=link %>'><%=title %></a>"),
            initialize: function(){
                this.render();
            },
            render: function() {
                var self = this;
                this.collection.each(function(news){
                    var newsView = new __viewNews({ model: news });
                    self.$el.append(newsView.$el);
                });
                return this;
            }
        });

        parent._modelforNewsDetailView = new Backbone.Model({
            title: "",
            description: "",
            imagehtml: "",
            link: ""
        });

        var __viewNewsDetail = Backbone.View.extend({
            el: "#" + parent._uid + " > .ui-newsreader-details",
            className: "ui-newsreader-details",
            isRendered: false,
            events: {
                "click .backtoNews": "backtoNews"
            },
            template: _.template('<h3><%=title%></h3>' +
                '<div class="details"><%=imagehtml %>' +
                '<p><%=description%></p></div>' +
                '<div class="smallmenu">' +
                '<a class="backtoNews" href="#">< Back</a>' +
                '<a class="readMore" target="_blank" href="<%=link%>">Read More ></a>' +
                '</div>'),
            initialize: function(){
                this.model.on('change:title', this.changeTitle, this);
                this.model.on('change:description', this.changeDescription, this);
                this.model.on('change:link', this.changeLink, this);
                this.model.on('change:imagehtml', this.changeImage, this);
            },
            changeTitle: function() { this.$el.find("h3").text(this.model.get("title")); },
            changeDescription: function() { this.$el.find("p").text(this.model.get("description")); },
            changeLink: function() { this.$el.find("a.readMore").attr("href", this.model.get("link")); },
            changeImage: function() { this.$el.find("img").remove(); this.$el.find("p").before(this.model.get("imagehtml")); },
            render: function() {
                this.$el.html(this.template(this.model.toJSON()));
                this.isRendered = true;
            },
            backtoNews: function() {
                if(parent.settings.changeUrlPath) window.location.hash = '';
                if(parent.settings.changeTitle) document.title = "UI News Reader - Backbone Plugin by İlker Güller";
                this.model.set("title", "");
                this.model.set("description", "");
                this.model.set("link", "");
                this.model.set("imagehtml", "");

                parent.$el.UINewsReaderDetail.hide();
                parent.$el.UINewsReaderList.show();
                return false;
            }
        });

        var init = function() {
            $UINewsReaderPath.html('<div class="ui-newsreader-list"><h3>LATEST NEWS</h3></div><div class="ui-newsreader-details" style="display: none;"></div>');
            parent.$el.UINewsReader = $UINewsReaderPath;
            parent.$el.UINewsReaderList = parent.$el.UINewsReader.find(".ui-newsreader-list");
            parent.$el.UINewsReaderDetail = parent.$el.UINewsReader.find(".ui-newsreader-details");

            parent.$el.UINewsReaderList.append("<img src='img/loading.GIF' class='loadingImg' width='48' height='48' alt='Loading' />");

            parent.newslist = new __collNewsList();
            parent.newslist.fetch({
                success: function() {
                    parent.$el.UINewsReaderList.find("img").remove();
                    parent.newslistView = new __viewNewsList({ collection: parent.newslist });
                    parent.newsdetailView = new __viewNewsDetail({ model: parent._modelforNewsDetailView });
                    parent.$el.UINewsReaderList.append(parent.newslistView.$el);
                }
            });
        };

        init();
    };
})(window, _, Backbone, $);