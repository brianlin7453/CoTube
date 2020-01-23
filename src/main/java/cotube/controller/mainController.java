package cotube.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class mainController {
    @RequestMapping(value={"/","home.html"})
    String home(){
        return "index";
    }

    @RequestMapping(value={"profile.html"})
    String profile(){
        return "profile";
    }

    @RequestMapping(value={"forget.html"})
    String forget(){
        return "forget";
    }

    @RequestMapping(value={"login.html"})
    String login(){
        return "login";
    }

    @RequestMapping(value={"index.html"})
    String index(){
        return "index";
    }

    @RequestMapping(value={"setting.html"})
    String setting(){
        return "setting";
    }

    @RequestMapping(value={"viewComicsByTitle.html"})
    String viewComicsByTitle(){
        return "viewComicsByTitle";
    }

    @RequestMapping(value={"message.html"})
    String message(){
        return "message";
    }

    @RequestMapping(value={"viewGameComicsByKeyword.html"})
    String viewGameComicsByKeyword(){
        return "viewGameComicsByKeyword";
    }

    @RequestMapping(value={"searchResult.html"})
    String searchResult(){
        return "searchResult";
    }

    @RequestMapping(value={"createHome.html"})
    String createHome(){
        return "createHome";
    }

    @RequestMapping(value={"favorite.html"})
    String favorite(){
        return "favorite";
    }

    @RequestMapping(value={"viewComics.html"})
    String viewComics(){
        return "viewComics";
    }

    @RequestMapping(value={"viewGameComics.html"})
    String viewGameComics(){
        return "viewGameComics";
    }

    @RequestMapping(value={"createComic.html"})
    String createComic(){
        return "createComic";
    }

    @RequestMapping(value={"admin.html"})
    String admin(){
        return "admin";
    }

    @RequestMapping(value={"createGame.html"})
    String createGame(){
        return "createGame";
    }

    @RequestMapping(value={"createGameDetail.html"})
    String createGameDetail(){
        return "createGameDetail";
    }

    @RequestMapping(value={"viewSeries.html"})
    String viewSeries(){
        return "viewSeries";
    }

    @RequestMapping(value={"createComicDetail.html"})
    String createComicDetail(){
        return "createComicDetail";
    }

    @RequestMapping(value={"editComic.html"})
    String editComic(){
        return "editComic";
    }
    
    @RequestMapping(value={"editComicDetail.html"})
    String editComicDetail(){
        return "editComicDetail";
    }
}
