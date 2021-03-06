<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="images/favicon.png">
    <title>Events - main page</title>
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/customcss/style1.css" rel="stylesheet">
    <link rel="stylesheet" href="fonts/fontawesome-free-5.6.3-web/css/all.css">
</head>
<body>

    <%@include file="../jspf/userPanel.jspf"%>
    <%@include file="../jspf/navigationBar.jspf"%>

    <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">

        <div id="logout"></div>
        <c:if test='${requestScope.get("message") != null}'>
            <div class="btn-success btn-lg mt-3 mb-3">${requestScope.get("message")}</div>
        </c:if>

        <h1 class="display-4">Find or create event!</h1>

        <br>

        <form action="index" method="get">
            <div id="custom-search-input">
                <div class="input-group">
                    <input type="text" name="name" class="form-control input-lg" placeholder="Event name" />
                    <span class="input-group-btn">
                            <button class="btn btn-primary btn-lg" type="submit">Search</button>
                    </span>
                </div>
            </div>

            <h4 class="m-3" align="left">Sort:</h4>

            <select class="d-inline form-control col-4" name="sortMode">
                <option value="nameAsc">By name ascending</option>
                <option value="nameDesc">By name descending</option>
                <option value="timeAsc">By beginning time: soonest first</option>
                <option value="timeDesc">By beginning time: latest first</option>
            </select>

            <select class="d-inline form-control col-4" name="eventCategory">
                <option value="everycategory">Every category</option>
                <option value="nocategory">No category only</option>
                <c:forEach var="categories" items="${categories}">
                    <option value="${categories.name}">${categories.name}</option>
                </c:forEach>
            </select>

        </form>

        <br><br>

        <p class="lead">Example events:</p>

    </div>

    <div class="container">

        <div class="card-deck mb-3 text-center">
            <c:forEach var="events" items="${requestScope.get('events')}">
                <div class="card mb-4 box-shadow">
                    <div class="card-header">
                        <h4 class="my-0 font-weight-normal" title="${events.getName()}">${events.getTruncatedName(20)}</h4>
                    </div>
                    <div class="card-body">
                        <ul class="list-unstyled mt-3 mb-4">
                                <%--If event has a category, it's name will be listed.--%>
                            <c:if test="${events.getEventCategoryModels().size() > 0}">
                                <li>Category: ${events.getEventCategoryModels().iterator().next().getName()}</li>
                            </c:if>
                                <%--If event has no category, ,,none'' will appear. --%>
                            <c:if test="${events.getEventCategoryModels().size() == 0 || events.getEventCategoryModels() == null}">
                                <li>Category: none</li>
                            </c:if>
                            <li>Start date: ${events.getBeginningDate().toString()}</li>
                            <li>Long: ${events.getLongitude()}</li>
                            <li>Lat: ${events.getLatitude()}</li>
                            <li><a href="/userDetailsView?name=${events.getUsers().iterator().next().getName()}">User: ${events.getUsers().iterator().next().getName()}</a></li>
                        </ul>
                        <form action="event" method="get">
                            <input type="hidden" name="name" value="${events.getName()}">
                            <button type="submit" class="btn btn-lg btn-block btn-primary">Know more</button>
                        </form>
                    </div>
                </div>
            </c:forEach>
        </div>

        <c:if test="${fn:length(requestScope.get('events')) == 0}">
            <h2 class="text-center"> Sorry, no results...</h2>
        </c:if>

        <%@include file="../jspf/footer.jspf"%>

    </div>

    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="jquery/jquery-3.3.1.js"></script>
    <script>window.jQuery || document.write('<script src="jquery/jquery-3.3.1.js"><\/script>')</script>
    <script src="popper/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script type="text/javascript">
        $(document).ready(function () {
            if(window.location.href.indexOf("logout") > -1) {

                document.getElementById("logout").innerHTML =
                    '<div class="btn-success btn-lg mt-3 mb-3">' +
                    'You have successfully logged out!' +
                    '</div>';

            }
        });
    </script>
</body>
</html>
