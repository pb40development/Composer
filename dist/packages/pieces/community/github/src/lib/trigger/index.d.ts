import { Trigger } from '@activepieces/pieces-framework';
export declare enum GithubEventType {
    PULL_REQUEST = "pull_request",
    STAR = "star",
    ISSUES = "issues"
}
export declare const registered: ({
    name: GithubEventType;
    displayName: string;
    description: string;
    sampleData: {
        action: string;
        number: number;
        pull_request: {
            url: string;
            id: number;
            node_id: string;
            html_url: string;
            diff_url: string;
            patch_url: string;
            issue_url: string;
            number: number;
            state: string;
            locked: boolean;
            title: string;
            user: {
                login: string;
                id: number;
                node_id: string;
                avatar_url: string;
                gravatar_id: string;
                url: string;
                html_url: string;
                followers_url: string;
                following_url: string;
                gists_url: string;
                starred_url: string;
                subscriptions_url: string;
                organizations_url: string;
                repos_url: string;
                events_url: string;
                received_events_url: string;
                type: string;
                site_admin: boolean;
            };
            body: string;
            created_at: string;
            updated_at: string;
            closed_at: null;
            merged_at: null;
            merge_commit_sha: null;
            assignee: null;
            assignees: never[];
            requested_reviewers: never[];
            requested_teams: never[];
            labels: never[];
            milestone: null;
            draft: boolean;
            commits_url: string;
            review_comments_url: string;
            review_comment_url: string;
            comments_url: string;
            statuses_url: string;
            head: {
                label: string;
                ref: string;
                sha: string;
                user: ObjectConstructor[];
                repo: ObjectConstructor[];
            };
            base: {
                label: string;
                ref: string;
                sha: string;
                user: ObjectConstructor[];
                repo: ObjectConstructor[];
            };
            author_association: string;
            auto_merge: null;
            active_lock_reason: null;
            merged: boolean;
            mergeable: null;
            rebaseable: null;
            mergeable_state: string;
            merged_by: null;
            comments: number;
            review_comments: number;
            maintainer_can_modify: boolean;
            commits: number;
            additions: number;
            deletions: number;
            changed_files: number;
        };
        repository: {
            id: number;
            node_id: string;
            name: string;
            full_name: string;
            private: boolean;
            owner: {
                login: string;
                id: number;
                node_id: string;
                avatar_url: string;
                gravatar_id: string;
                url: string;
                html_url: string;
                followers_url: string;
                following_url: string;
                gists_url: string;
                starred_url: string;
                subscriptions_url: string;
                organizations_url: string;
                repos_url: string;
                events_url: string;
                received_events_url: string;
                type: string;
                site_admin: boolean;
            };
            html_url: string;
            description: string;
            fork: boolean;
            url: string;
            forks_url: string;
            keys_url: string;
            collaborators_url: string;
            teams_url: string;
            hooks_url: string;
            issue_events_url: string;
            events_url: string;
            assignees_url: string;
            branches_url: string;
            tags_url: string;
            blobs_url: string;
            git_tags_url: string;
            git_refs_url: string;
            trees_url: string;
            statuses_url: string;
            languages_url: string;
            stargazers_url: string;
            contributors_url: string;
            subscribers_url: string;
            subscription_url: string;
            commits_url: string;
            git_commits_url: string;
            comments_url: string;
            issue_comment_url: string;
            contents_url: string;
            compare_url: string;
            merges_url: string;
            archive_url: string;
            downloads_url: string;
            issues_url: string;
            pulls_url: string;
            milestones_url: string;
            notifications_url: string;
            labels_url: string;
            releases_url: string;
            deployments_url: string;
            created_at: string;
            updated_at: string;
            pushed_at: string;
            git_url: string;
            ssh_url: string;
            clone_url: string;
            svn_url: string;
            homepage: null;
            size: number;
            stargazers_count: number;
            watchers_count: number;
            language: string;
            has_issues: boolean;
            has_projects: boolean;
            has_downloads: boolean;
            has_wiki: boolean;
            has_pages: boolean;
            has_discussions: boolean;
            forks_count: number;
            mirror_url: null;
            archived: boolean;
            disabled: boolean;
            open_issues_count: number;
            license: null;
            allow_forking: boolean;
            is_template: boolean;
            web_commit_signoff_required: boolean;
            topics: never[];
            visibility: string;
            forks: number;
            open_issues: number;
            watchers: number;
            default_branch: string;
        };
        sender: {
            login: string;
            id: number;
            node_id: string;
            avatar_url: string;
            gravatar_id: string;
            url: string;
            html_url: string;
            followers_url: string;
            following_url: string;
            gists_url: string;
            starred_url: string;
            subscriptions_url: string;
            organizations_url: string;
            repos_url: string;
            events_url: string;
            received_events_url: string;
            type: string;
            site_admin: boolean;
        };
        starred_at?: undefined;
        issue?: undefined;
    };
} | {
    name: GithubEventType;
    displayName: string;
    description: string;
    sampleData: {
        action: string;
        starred_at: string;
        repository: {
            id: number;
            node_id: string;
            name: string;
            full_name: string;
            private: boolean;
            owner: {
                login: string;
                id: number;
                node_id: string;
                avatar_url: string;
                gravatar_id: string;
                url: string;
                html_url: string;
                followers_url: string;
                following_url: string;
                gists_url: string;
                starred_url: string;
                subscriptions_url: string;
                organizations_url: string;
                repos_url: string;
                events_url: string;
                received_events_url: string;
                type: string;
                site_admin: boolean;
            };
            html_url: string;
            description: string;
            fork: boolean;
            url: string;
            forks_url: string;
            keys_url: string;
            collaborators_url: string;
            teams_url: string;
            hooks_url: string;
            issue_events_url: string;
            events_url: string;
            assignees_url: string;
            branches_url: string;
            tags_url: string;
            blobs_url: string;
            git_tags_url: string;
            git_refs_url: string;
            trees_url: string;
            statuses_url: string;
            languages_url: string;
            stargazers_url: string;
            contributors_url: string;
            subscribers_url: string;
            subscription_url: string;
            commits_url: string;
            git_commits_url: string;
            comments_url: string;
            issue_comment_url: string;
            contents_url: string;
            compare_url: string;
            merges_url: string;
            archive_url: string;
            downloads_url: string;
            issues_url: string;
            pulls_url: string;
            milestones_url: string;
            notifications_url: string;
            labels_url: string;
            releases_url: string;
            deployments_url: string;
            created_at: string;
            updated_at: string;
            pushed_at: string;
            git_url: string;
            ssh_url: string;
            clone_url: string;
            svn_url: string;
            homepage: null;
            size: number;
            stargazers_count: number;
            watchers_count: number;
            language: string;
            has_issues: boolean;
            has_projects: boolean;
            has_downloads: boolean;
            has_wiki: boolean;
            has_pages: boolean;
            has_discussions: boolean;
            forks_count: number;
            mirror_url: null;
            archived: boolean;
            disabled: boolean;
            open_issues_count: number;
            license: null;
            allow_forking: boolean;
            is_template: boolean;
            web_commit_signoff_required: boolean;
            topics: never[];
            visibility: string;
            forks: number;
            open_issues: number;
            watchers: number;
            default_branch: string;
        };
        sender: {
            login: string;
            id: number;
            node_id: string;
            avatar_url: string;
            gravatar_id: string;
            url: string;
            html_url: string;
            followers_url: string;
            following_url: string;
            gists_url: string;
            starred_url: string;
            subscriptions_url: string;
            organizations_url: string;
            repos_url: string;
            events_url: string;
            received_events_url: string;
            type: string;
            site_admin: boolean;
        };
        number?: undefined;
        pull_request?: undefined;
        issue?: undefined;
    };
} | {
    name: GithubEventType;
    displayName: string;
    description: string;
    sampleData: {
        action: string;
        issue: {
            url: string;
            repository_url: string;
            labels_url: string;
            comments_url: string;
            events_url: string;
            html_url: string;
            id: number;
            node_id: string;
            number: number;
            title: string;
            user: {
                login: string;
                id: number;
                node_id: string;
                avatar_url: string;
                gravatar_id: string;
                url: string;
                html_url: string;
                followers_url: string;
                following_url: string;
                gists_url: string;
                starred_url: string;
                subscriptions_url: string;
                organizations_url: string;
                repos_url: string;
                events_url: string;
                received_events_url: string;
                type: string;
                site_admin: boolean;
            };
            labels: never[];
            state: string;
            locked: boolean;
            assignee: null;
            assignees: never[];
            milestone: null;
            comments: number;
            created_at: string;
            updated_at: string;
            closed_at: null;
            author_association: string;
            active_lock_reason: null;
            body: string;
            reactions: {
                url: string;
                total_count: number;
                '+1': number;
                '-1': number;
                laugh: number;
                hooray: number;
                confused: number;
                heart: number;
                rocket: number;
                eyes: number;
            };
            timeline_url: string;
            performed_via_github_app: null;
            state_reason: null;
        };
        repository: {
            id: number;
            node_id: string;
            name: string;
            full_name: string;
            private: boolean;
            owner: {
                login: string;
                id: number;
                node_id: string;
                avatar_url: string;
                gravatar_id: string;
                url: string;
                html_url: string;
                followers_url: string;
                following_url: string;
                gists_url: string;
                starred_url: string;
                subscriptions_url: string;
                organizations_url: string;
                repos_url: string;
                events_url: string;
                received_events_url: string;
                type: string;
                site_admin: boolean;
            };
            html_url: string;
            description: string;
            fork: boolean;
            url: string;
            forks_url: string;
            keys_url: string;
            collaborators_url: string;
            teams_url: string;
            hooks_url: string;
            issue_events_url: string;
            events_url: string;
            assignees_url: string;
            branches_url: string;
            tags_url: string;
            blobs_url: string;
            git_tags_url: string;
            git_refs_url: string;
            trees_url: string;
            statuses_url: string;
            languages_url: string;
            stargazers_url: string;
            contributors_url: string;
            subscribers_url: string;
            subscription_url: string;
            commits_url: string;
            git_commits_url: string;
            comments_url: string;
            issue_comment_url: string;
            contents_url: string;
            compare_url: string;
            merges_url: string;
            archive_url: string;
            downloads_url: string;
            issues_url: string;
            pulls_url: string;
            milestones_url: string;
            notifications_url: string;
            labels_url: string;
            releases_url: string;
            deployments_url: string;
            created_at: string;
            updated_at: string;
            pushed_at: string;
            git_url: string;
            ssh_url: string;
            clone_url: string;
            svn_url: string;
            homepage: null;
            size: number;
            stargazers_count: number;
            watchers_count: number;
            language: string;
            has_issues: boolean;
            has_projects: boolean;
            has_downloads: boolean;
            has_wiki: boolean;
            has_pages: boolean;
            has_discussions: boolean;
            forks_count: number;
            mirror_url: null;
            archived: boolean;
            disabled: boolean;
            open_issues_count: number;
            license: null;
            allow_forking: boolean;
            is_template: boolean;
            web_commit_signoff_required: boolean;
            topics: never[];
            visibility: string;
            forks: number;
            open_issues: number;
            watchers: number;
            default_branch: string;
        };
        sender: {
            login: string;
            id: number;
            node_id: string;
            avatar_url: string;
            gravatar_id: string;
            url: string;
            html_url: string;
            followers_url: string;
            following_url: string;
            gists_url: string;
            starred_url: string;
            subscriptions_url: string;
            organizations_url: string;
            repos_url: string;
            events_url: string;
            received_events_url: string;
            type: string;
            site_admin: boolean;
        };
        number?: undefined;
        pull_request?: undefined;
        starred_at?: undefined;
    };
})[];
export declare const githubTriggers: Trigger[];