import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

::selection {
    background: ${({ theme }) => theme.textHighlight};
}

::-webkit-scrollbar {
    &-thumb {
        background-image: ${({ theme }) => theme.scrollBarGradient};
    }
}

body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.textColor};
}

.navbar {
    background: ${({ theme }) => theme.body};

    img {
        filter: ${({ theme }) => theme.logoInvert};
    }
}

#navbar-title {
    color: ${({ theme }) => theme.textColor};
}

#collapse-nav {
    .navbar-nav {
        .nav-link {
            &:hover {
                color: ${({ theme }) => theme.cardTextHover}!important;
            }

            span {
                &:hover {
                    color: ${({ theme }) => theme.navbarLinkMuted}!important;
                }
            }
        }
        .toggle-mode-button {
            background: ${({ theme }) => theme.body};
            color: ${({ theme }) => theme.textColor};

            &:before {
                background-image: ${({ theme }) => theme.toggleBtnBackground}!important;
            }

            span {
                background-image: ${({ theme }) => theme.toggleBtnText}!important;
            }
        }
    }
}

.toggle-mode {
    border: ${({ theme }) => theme.toggleThemeBorder}!important;
    color: ${({ theme }) => theme.textColor}!important;
}

.nav-link {
    color: ${({ theme }) => theme.textColor}!important;
    span {
        color: ${({ theme }) => theme.mutedText};
    }
}

.categories-list {
    &:nth-child(1n) {
        span {
            background-image: ${({ theme }) => theme.hashtagGradient};
        }
    }
    .categories-link {
        &:hover {
            color: ${({ theme }) => theme.cardTextHover}!important;
            box-shadow: ${({ theme }) => theme.categoryBoxShadow};
        }
    }
}

.card {
    background-color: ${({ theme }) => theme.body};

    &-author-name {
        span {
            color: ${({ theme }) => theme.cardTextHover};
        }
    }
}

.card-title-link {
    color: ${({ theme }) => theme.textColor};
    &:hover {
        color: ${({ theme }) => theme.cardTextHover};
    }
}

.card-list {
    :before {
    background-image: ${({ theme }) => theme.beforeGradient};
    }
}

.recent-card-title-link {
    color: ${({ theme }) => theme.textColor};
    &:hover {
        color: ${({ theme }) => theme.cardTextHover};
    }
}

.recent-card-author {
    color: ${({ theme }) => theme.mutedText}!important;
    span {
        color: ${({ theme }) => theme.cardTextHover};
    }
}

.recent-card-date {
    cite{
        color: ${({ theme }) => theme.mutedText}!important;
    }
}

.footer {
    background: ${({ theme }) => theme.body};

    &::before {
    background-image: ${({ theme }) => theme.beforeGradient};
    }
}

.footer-div {
    &-title {
        &-link {
            color: ${({ theme }) => theme.textColor};

            &:hover {
                color: ${({ theme }) => theme.cardTextHover};
            }
        }
    }
}

.footer-contact {
    &-icons {
        &-link {
            span {
                color: ${({ theme }) => theme.cardTextHover};
            }
        }
    }
}
`