import Home from '../../../../../public/asset/Home.svg'
import Branch from '../../../../../public/asset/Branch.svg'
import Role from '../../../../../public/asset/roles.svg'
import User from '../../../../../public/asset/user-group.svg'
import Card from '../../../../../public/asset/card.svg'
import CreditCard from '../../../../../public/asset/credit-card-pos.svg'
import CardRequest from '../../../../../public/asset/credit-card-accept.svg'
import Stock from '../../../../../public/asset/stock.svg'
import Cards from '../../../../../public/asset/credit-card.svg'
import List from '../../../../../public/asset/list.svg'
import Queue from '../../../../../public/asset/queue.svg'
// import Quick from '../../../../../public/asset/quick.svg'
// import Analytic_1 from '../../../../../public/asset/analytic.svg'
// import Analytics_2 from '../../../../../public/asset/Analytic_2.svg'
// import BankNote from '../../../../../public/asset/bank-note-01.svg'
// import Hour_glass from '../../../../../public/asset/hourglass-03.svg'
export const sidebarLinks = [
{
imgURL: Home,
route: "/",
label: "Home",
},
{
imgURL: Branch,
route: '/Branch',
label: "Branch",
},
{
imgURL: Role,
route: "/all-users",
label: "Roles",
},
{
imgURL: User,
route: "/saved",
label: "Users",
},
{
imgURL: Card,
route: "/create-post",
label: "Card Scheme",
},
{
imgURL: CreditCard,
route: "/create-post",
label: "Card Profile",
},
{
    imgURL: CardRequest,
    route: "/create-post",
    label: "Card Request",
    },
    {
        imgURL: Stock,
        route: "/create-post",
        label: "Stock",
        },
        {
            imgURL: Cards,
            route: "/create-post",
            label: "Cards",
            },
            {
                imgURL: List,
                route: "/create-post",
                label: "Authorization List",
                },
                {
                    imgURL: Queue,
                    route: "/create-post",
                    label: "Authorization Queue",
                    },
                    {
                        // imgURL: CreditCard,
                        route: "/create-post",
                        label: "Trail",
                        },
                        {
                            // imgURL: CreditCard,
                            route: "/create-post",
                            label: "Account",
                            },
];

export const QuickAccess = [
{
// imageUrl: Quick,
label: 'Manage a Card',
},
{
// imageUrl: Quick,
label: 'Issue Instant Card',
},
{
// imageUrl: Quick,
label: 'Issue Personalized Card',
},
{
// imageUrl: Quick,
label: 'Review Card Requests',
},
]

export const Analytic = [
{
// imageUrl: Analytic_1,
label: 'Total Active Cards',
total: '26,478',
margin: '9%',
month: 'this month'
},
{
// imageUrl: Analytics_2,
label: 'Total Personalized Cards',
total: '15,703',
margin: '8.5%',
month: 'this month'
},
{
// imageUrl: BankNote,
label: 'Today’s Revenue',
total: '₦9.3M',
margin: '6%',
month: 'vs yesterday'
},
{
// imageUrl: Hour_glass,
label: 'Pending Requests',
total: '38',
margin: '9%',
month: 'Requires attention'
},
]

export const tableData = [
{ name: "Corporate", cardType: "Instant", qty: 10, check:'Acknowledged', action: "View" },
{ name: "Corporate", cardType: "Personalized", qty: 40, check:'Acknowledged', action: "View" },
{ name: "Corporate", cardType: "Personalized", qty: 20, check:'Acknowledged', action: "View" },
{ name: "Corporate", cardType: "Instant", qty: 13, check:'Acknowledged', action: "View" },

];
// export const bottombarLinks = [
// {
// imgURL: Home,
// route: "/",
// label: "Home",
// },
// {
// imgURL: Wallpaper,
// route: "/explore",
// label: "Explore",
// },
// {
// imgURL: bookmark,
// route: "/saved",
// label: "Saved",
// },
// {
// imgURL: gallery_add,
// route: "/create-post",
// label: "Create",
// },
// ]; the default arrays