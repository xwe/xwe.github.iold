
function millisecondsToStr(a) {
    "use strict";

    function b(a) {
        return a > 1 ? "s назад" : " ago"
    }
    var c = Math.floor(a / 1e3),
        d = Math.floor(c / 31536e3);
    if (d) return d + " год" + b(d);
    var e = Math.floor((c %= 31536e3) / 2592e3);
    if (e) return e + " месяц" + b(e);
    var f = Math.floor((c %= 2592e3) / 86400);
    if (f) return f + " день" + b(f);
    var g = Math.floor((c %= 86400) / 3600);
    if (g) return "about " + g + " hour" + b(g);
    var h = Math.floor((c %= 3600) / 60);
    if (h) return h + " минут" + b(h);
    var i = c % 60;
    return i ? i + " секунд" + b(i) : "только что"
}

function pluralize(a, b) {
    return 1 !== b ? a + "s" : a
}

function md5cycle(a, b) {
    var c = a[0],
        d = a[1],
        e = a[2],
        f = a[3];
    c = ff(c, d, e, f, b[0], 7, -680876936), f = ff(f, c, d, e, b[1], 12, -389564586), e = ff(e, f, c, d, b[2], 17, 606105819), d = ff(d, e, f, c, b[3], 22, -1044525330), c = ff(c, d, e, f, b[4], 7, -176418897), f = ff(f, c, d, e, b[5], 12, 1200080426), e = ff(e, f, c, d, b[6], 17, -1473231341), d = ff(d, e, f, c, b[7], 22, -45705983), c = ff(c, d, e, f, b[8], 7, 1770035416), f = ff(f, c, d, e, b[9], 12, -1958414417), e = ff(e, f, c, d, b[10], 17, -42063), d = ff(d, e, f, c, b[11], 22, -1990404162), c = ff(c, d, e, f, b[12], 7, 1804603682), f = ff(f, c, d, e, b[13], 12, -40341101), e = ff(e, f, c, d, b[14], 17, -1502002290), d = ff(d, e, f, c, b[15], 22, 1236535329), c = gg(c, d, e, f, b[1], 5, -165796510), f = gg(f, c, d, e, b[6], 9, -1069501632), e = gg(e, f, c, d, b[11], 14, 643717713), d = gg(d, e, f, c, b[0], 20, -373897302), c = gg(c, d, e, f, b[5], 5, -701558691), f = gg(f, c, d, e, b[10], 9, 38016083), e = gg(e, f, c, d, b[15], 14, -660478335), d = gg(d, e, f, c, b[4], 20, -405537848), c = gg(c, d, e, f, b[9], 5, 568446438), f = gg(f, c, d, e, b[14], 9, -1019803690), e = gg(e, f, c, d, b[3], 14, -187363961), d = gg(d, e, f, c, b[8], 20, 1163531501), c = gg(c, d, e, f, b[13], 5, -1444681467), f = gg(f, c, d, e, b[2], 9, -51403784), e = gg(e, f, c, d, b[7], 14, 1735328473), d = gg(d, e, f, c, b[12], 20, -1926607734), c = hh(c, d, e, f, b[5], 4, -378558), f = hh(f, c, d, e, b[8], 11, -2022574463), e = hh(e, f, c, d, b[11], 16, 1839030562), d = hh(d, e, f, c, b[14], 23, -35309556), c = hh(c, d, e, f, b[1], 4, -1530992060), f = hh(f, c, d, e, b[4], 11, 1272893353), e = hh(e, f, c, d, b[7], 16, -155497632), d = hh(d, e, f, c, b[10], 23, -1094730640), c = hh(c, d, e, f, b[13], 4, 681279174), f = hh(f, c, d, e, b[0], 11, -358537222), e = hh(e, f, c, d, b[3], 16, -722521979), d = hh(d, e, f, c, b[6], 23, 76029189), c = hh(c, d, e, f, b[9], 4, -640364487), f = hh(f, c, d, e, b[12], 11, -421815835), e = hh(e, f, c, d, b[15], 16, 530742520), d = hh(d, e, f, c, b[2], 23, -995338651), c = ii(c, d, e, f, b[0], 6, -198630844), f = ii(f, c, d, e, b[7], 10, 1126891415), e = ii(e, f, c, d, b[14], 15, -1416354905), d = ii(d, e, f, c, b[5], 21, -57434055), c = ii(c, d, e, f, b[12], 6, 1700485571), f = ii(f, c, d, e, b[3], 10, -1894986606), e = ii(e, f, c, d, b[10], 15, -1051523), d = ii(d, e, f, c, b[1], 21, -2054922799), c = ii(c, d, e, f, b[8], 6, 1873313359), f = ii(f, c, d, e, b[15], 10, -30611744), e = ii(e, f, c, d, b[6], 15, -1560198380), d = ii(d, e, f, c, b[13], 21, 1309151649), c = ii(c, d, e, f, b[4], 6, -145523070), f = ii(f, c, d, e, b[11], 10, -1120210379), e = ii(e, f, c, d, b[2], 15, 718787259), d = ii(d, e, f, c, b[9], 21, -343485551), a[0] = add32(c, a[0]), a[1] = add32(d, a[1]), a[2] = add32(e, a[2]), a[3] = add32(f, a[3])
}

function cmn(a, b, c, d, e, f) {
    return b = add32(add32(b, a), add32(d, f)), add32(b << e | b >>> 32 - e, c)
}

function ff(a, b, c, d, e, f, g) {
    return cmn(b & c | ~b & d, a, b, e, f, g)
}

function gg(a, b, c, d, e, f, g) {
    return cmn(b & d | c & ~d, a, b, e, f, g)
}

function hh(a, b, c, d, e, f, g) {
    return cmn(b ^ c ^ d, a, b, e, f, g)
}

function ii(a, b, c, d, e, f, g) {
    return cmn(c ^ (b | ~d), a, b, e, f, g)
}

function md51(a) {
    txt = "";
    var b, c = a.length,
        d = [1732584193, -271733879, -1732584194, 271733878];
    for (b = 64; b <= a.length; b += 64) md5cycle(d, md5blk(a.substring(b - 64, b)));
    a = a.substring(b - 64);
    var e = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (b = 0; b < a.length; b++) e[b >> 2] |= a.charCodeAt(b) << (b % 4 << 3);
    if (e[b >> 2] |= 128 << (b % 4 << 3), b > 55)
        for (md5cycle(d, e), b = 0; 16 > b; b++) e[b] = 0;
    return e[14] = 8 * c, md5cycle(d, e), d
}

function md5blk(a) {
    var b, c = [];
    for (b = 0; 64 > b; b += 4) c[b >> 2] = a.charCodeAt(b) + (a.charCodeAt(b + 1) << 8) + (a.charCodeAt(b + 2) << 16) + (a.charCodeAt(b + 3) << 24);
    return c
}

function rhex(a) {
    for (var b = "", c = 0; 4 > c; c++) b += hex_chr[a >> 8 * c + 4 & 15] + hex_chr[a >> 8 * c & 15];
    return b
}

function hex(a) {
    for (var b = 0; b < a.length; b++) a[b] = rhex(a[b]);
    return a.join("")
}

function md5(a) {
    return hex(md51(a))
}

function add32(a, b) {
    return a + b & 4294967295
}

function add32(a, b) {
    var c = (65535 & a) + (65535 & b),
        d = (a >> 16) + (b >> 16) + (c >> 16);
    return d << 16 | 65535 & c
}
var GitHubActivity = function() {
        "use strict";
        var a = {},
            b = {
                renderLink: function(a, b, c) {
                    return b || (b = a), "undefined" == typeof c && (c = ""), Mustache.render('<a class="' + c + '" href="{{url}}" target="_blank">{{{title}}}</a>', {
                        url: a,
                        title: b
                    })
                },
                renderGitHubLink: function(a, c, d) {
                    return c || (c = a), "undefined" == typeof d && (d = ""), b.renderLink("https://github.com/" + a, c, d)
                },
                getMessageFor: function(a) {
                    var c = a.payload;
                    if (a.repoLink = b.renderGitHubLink(a.repo.name), a.userGravatar = Mustache.render('<div class="gha-gravatar-user"><img src="{{url}}" class="gha-gravatar-small"></div>', {
                            url: a.actor.avatar_url
                        }), c.ref && (a.branch = "refs/heads/" === c.ref.substring(0, 11) ? c.ref.substring(11) : c.ref, a.branchLink = b.renderGitHubLink(a.repo.name + "/tree/" + a.branch, a.branch) + " at "), c.commits) {
                        var d = c.before + "..." + c.head,
                            e = c.commits.length;
                        2 === e ? a.commitsMessage = Mustache.render('<a href="https://github.com/{{repo}}/compare/{{shaDiff}}">View comparison for these 2 commits &raquo;</a>', {
                            repo: a.repo.name,
                            shaDiff: d
                        }) : e > 2 && (a.commitsMessage = Mustache.render('<a href="https://github.com/{{repo}}/compare/{{shaDiff}}">{{length}} more ' + pluralize("commit", e - 2) + " &raquo;</a>", {
                            repo: a.repo.name,
                            shaDiff: d,
                            length: c.size - 2
                        })), c.commits.forEach(function(d, e) {
                            return d.message.length > 66 && (d.message = d.message.substring(0, 66) + "..."), 2 > e ? (d.shaLink = b.renderGitHubLink(a.repo.name + "/commit/" + d.sha, d.sha.substring(0, 6), "gha-sha"), void(d.committerGravatar = Mustache.render('<img class="gha-gravatar-commit" src="https://gravatar.com/avatar/{{hash}}?s=30&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="16" />', {
                                hash: md5(d.author.email)
                            }))) : (c.commits.splice(2, c.size), !1)
                        })
                    }
                    if (c.issue) {
                        var f = a.repo.name + "#" + c.issue.number;
                        a.issueLink = b.renderLink(c.issue.html_url, f), a.issueType = "issue", c.issue.pull_request && (a.issueType = "pull request")
                    }
                    if (c.pull_request) {
                        var g = c.pull_request;
                        if (a.pullRequestLink = b.renderLink(g.html_url, a.repo.name + "#" + g.number), a.mergeMessage = "", c.pull_request.merged) {
                            c.action = "merged";
                            var h = "{{c}} " + pluralize("commit", g.commits) + " with {{a}} " + pluralize("addition", g.additions) + " and {{d}} " + pluralize("deletion", g.deletions);
                            a.mergeMessage = Mustache.render('<br><small class="gha-message-merge">' + h + "</small>", {
                                c: g.commits,
                                a: g.additions,
                                d: g.deletions
                            })
                        }
                    }
                    if (c.comment && c.comment.pull_request_url) {
                        var f = a.repo.name + "#" + c.comment.pull_request_url.split("/").pop();
                        a.pullRequestLink = b.renderGitHubLink(c.comment.pull_request_url, f)
                    }
                    if (c.comment && c.comment.body && (a.comment = c.comment.body, a.comment.length > 150 && (a.comment = a.comment.substring(0, 150) + "..."), c.comment.html_url && c.comment.commit_id)) {
                        var f = a.repo.name + "@" + c.comment.commit_id.substring(0, 10);
                        a.commentLink = b.renderLink(c.comment.html_url, f)
                    }
                    if ("ReleaseEvent" === a.type && (a.tagLink = b.renderLink(c.release.html_url, c.release.tag_name), a.zipLink = b.renderLink(c.release.zipball_url, "Download Source Code (zip)")), "GollumEvent" === a.type) {
                        var i = c.pages[0];
                        a.actionType = i.action, a.message = a.actionType.charAt(0).toUpperCase() + a.actionType.slice(1) + " ", a.message += b.renderGitHubLink(i.html_url, i.title)
                    }
                    "FollowEvent" === a.type && (a.targetLink = b.renderGitHubLink(c.target.login)), "ForkEvent" === a.type && (a.forkLink = b.renderGitHubLink(c.forkee.full_name)), "MemberEvent" === a.type && (a.memberLink = b.renderGitHubLink(c.member.login)), c.gist && (a.actionType = "fork" === c.action ? c.action + "ed" : c.action + "d", a.gistLink = b.renderLink(c.gist.html_url, "gist: " + c.gist.id));
                    var j, h = Mustache.render(templates[a.type], a),
                        k = millisecondsToStr(new Date - new Date(a.created_at));
                    j = "CreateEvent" == a.type && ["repository", "branch", "tag"].indexOf(c.ref_type) >= 0 ? icons[a.type + "_" + c.ref_type] : icons[a.type];
                    var l = {
                        message: h,
                        icon: j,
                        timeString: k,
                        userLink: b.renderGitHubLink(a.actor.login)
                    };
                    return singleLineActivities.indexOf(a.type) > -1 ? Mustache.render(templates.SingleLineActivity, l) : Mustache.render(templates.Activity, l)
                },
                getHeaderHTML: function(a) {
                    return a.name ? a.userNameLink = b.renderLink(a.html_url, a.name) : a.withoutName = " without-name", a.userLink = b.renderLink(a.html_url, a.login), a.gravatarLink = b.renderLink(a.html_url, '<img src="' + a.avatar_url + '">'), Mustache.render(templates.UserHeader, a)
                },
                getActivityHTML: function(a, c) {
                    var d = "",
                        e = a.length;
                    if (c && c > e && (c = e), c = c ? c : e, 0 === c) return Mustache.render(templates.NoActivity, {});
                    for (var f = 0; c > f; f++) d += b.getMessageFor(a[f]);
                    return d
                },
                getOutputFromRequest: function(a, b) {
                    var c = new XMLHttpRequest;
                    c.open("GET", a), c.setRequestHeader("Accept", "application/vnd.github.v3+json"), c.onreadystatechange = function() {
                        if (4 === c.readyState)
                            if (c.status >= 200 && c.status < 300) {
                                var d = JSON.parse(c.responseText);
                                b(void 0, d)
                            } else b("request for " + a + " yielded status " + c.status)
                    }, c.onerror = function() {
                        b("An error occurred connecting to " + a)
                    }, c.send()
                },
                renderStream: function(a, b) {
                    b.innerHTML = Mustache.render(templates.Stream, {
                        text: a,
                        footer: templates.Footer
                    }), b.style.position = "relative"
                },
                writeOutput: function(a, c) {
                    var d = "#" === a.charAt(0) ? document.getElementById(a.substring(1)) : document.getElementsByClassName(a.substring(1));
                    if (d instanceof HTMLCollection)
                        for (var e = 0; e < d.length; e++) b.renderStream(c, d[e]);
                    else b.renderStream(c, d)
                },
                renderIfReady: function(a, c, d) {
                    c && d && b.writeOutput(a, c + d)
                }
            };
        return a.feed = function(a) {
            if (!a.username || !a.selector) throw "You must specify the username and selector options for the activity stream.";
            var c, d, e = a.selector,
                f = "https://api.github.com/users/" + a.username,
                g = f + "/events";
            if (a.repository && (g = "https://api.github.com/repos/" + a.username + "/" + a.repository + "/events"), a.clientId && a.clientSecret) {
                var h = "?client_id=" + a.clientId + "&client_secret=" + a.clientSecret;
                f += h, g += h
            }
            if (a.eventsUrl && (g = a.eventsUrl), "object" == typeof a.templates)
                for (var i in templates) "string" == typeof a.templates[i] && (templates[i] = a.templates[i]);
            b.getOutputFromRequest(f, function(f, g) {
                c = f ? Mustache.render(templates.UserNotFound, {
                    username: a.username
                }) : b.getHeaderHTML(g), b.renderIfReady(e, c, d)
            }), b.getOutputFromRequest(g, function(f, g) {
                if (f) d = Mustache.render(templates.EventsNotFound, {
                    username: a.username
                });
                else {
                    var h = "undefined" != a.limit ? parseInt(a.limit, 10) : null;
                    d = b.getActivityHTML(g, h)
                }
                b.renderIfReady(e, c, d)
            })
        }, a
    }(),
    hex_chr = "0123456789abcdef".split("");
"5d41402abc4b2a76b9719d911017c592" != md5("hello");
var templates = {
        Stream: '<div class="gha-feed">{{{text}}}<div class="gha-push-small"></div>{{{footer}}}</div>',
        Activity: '<div id="{{id}}" class="gha-activity">               <div class="gha-activity-icon"><span class="octicon octicon-{{icon}}"></span></div>               <div class="gha-message"><div class="gha-time">{{{timeString}}}</div>{{{userLink}}} {{{message}}}</div>               <div class="gha-clear"></div>             </div>',
        SingleLineActivity: '<div class="gha-activity gha-small">                         <div class="gha-activity-icon"><span class="octicon octicon-{{icon}}"></span></div>                         <div class="gha-message">{{{userLink}}} {{{message}}}</div><div class="gha-time">{{{timeString}}}</div>                         <div class="gha-clear"></div>                       </div>',
        UserHeader: '<div class="gha-header">                 <!--<div class="gha-github-icon"><span class="octicon octicon-mark-github"></span></div>-->                 <div class="gha-user-info{{withoutName}}"><!--{{{userNameLink}}}<p>{{{userLink}}}</p>--></div>                 <div class="gha-gravatar">{{{gravatarLink}}}</div>               </div><div class="gha-push"></div>',
        Footer: '<div class="gha-footer"><!--Public Activity <a href="https://github.com/caseyscarborough/github-activity" target="_blank">GitHub Activity Stream</a></div>-->',
        NoActivity: '<div class="gha-info">This user does not have any public activity yet.</div>',
        UserNotFound: '<div class="gha-info">User {{username}} wasn\'t found.</div>',
        EventsNotFound: '<div class="gha-info">Events for user {{username}} not found.</div>',
        CommitCommentEvent: "commented on commit {{{commentLink}}}<br>{{{userGravatar}}}<small>{{comment}}</small>",
        CreateEvent: "created {{payload.ref_type}} {{{branchLink}}}{{{repoLink}}}",
        DeleteEvent: "deleted {{payload.ref_type}} {{payload.ref}} в {{{repoLink}}}",
        FollowEvent: "started following {{{targetLink}}}",
        ForkEvent: "forked {{{repoLink}}} to {{{forkLink}}}",
        GistEvent: "{{actionType}} {{{gistLink}}}",
        GollumEvent: "{{actionType}} the {{{repoLink}}} wiki<br>{{{userGravatar}}}<small>{{{message}}}</small>",
        IssueCommentEvent: "commented on {{issueType}} {{{issueLink}}}<br>{{{userGravatar}}}<small>{{comment}}</small>",
        IssuesEvent: "{{payload.action}} issue {{{issueLink}}}<br>{{{userGravatar}}}<small>{{payload.issue.title}}</small>",
        MemberEvent: "added {{{memberLink}}} to {{{repoLink}}}",
        PublicEvent: "open sourced {{{repoLink}}}",
        PullRequestEvent: "{{payload.action}} pull request {{{pullRequestLink}}}<br>{{{userGravatar}}}<small>{{payload.pull_request.title}}</small>{{{mergeMessage}}}",
        PullRequestReviewCommentEvent: "commented on pull request {{{pullRequestLink}}}<br>{{{userGravatar}}}<small>{{comment}}</small>",
        PushEvent: 'изменил {{{branchLink}}}{{{repoLink}}}<br>                <ul class="gha-commits">{{#payload.commits}}<li><small>{{{committerGravatar}}} {{{shaLink}}} {{message}}</small></li>{{/payload.commits}}</ul>                <small class="gha-message-commits">{{{commitsMessage}}}</small>',
        ReleaseEvent: 'released {{{tagLink}}} внутри {{{repoLink}}}<br>{{{userGravatar}}}<small><span class="octicon octicon-cloud-download"></span>  {{{zipLink}}}</small>',
        WatchEvent: "starred {{{repoLink}}}"
    },
    icons = {
        CommitCommentEvent: "comment-discussion",
        CreateEvent_repository: "repo-create",
        CreateEvent_tag: "tag-add",
        CreateEvent_branch: "git-branch-create",
        DeleteEvent: "repo-delete",
        FollowEvent: "person-follow",
        ForkEvent: "repo-forked",
        GistEvent: "gist",
        GollumEvent: "repo",
        IssuesEvent: "issue-opened",
        IssueCommentEvent: "comment-discussion",
        MemberEvent: "person",
        PublicEvent: "globe",
        PullRequestEvent: "git-pull-request",
        PullRequestReviewCommentEvent: "comment-discussion",
        PushEvent: "git-commit",
        ReleaseEvent: "tag-add",
        WatchEvent: "star"
    },
    singleLineActivities = ["CreateEvent", "DeleteEvent", "FollowEvent", "ForkEvent", "GistEvent", "MemberEvent", "WatchEvent"];
