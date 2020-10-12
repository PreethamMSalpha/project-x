import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { PricingTable, PricingSlot, PricingDetail } from "react-pricing-table";

// import Button from "@material-ui/core/Button";
// import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import CardHeader from "@material-ui/core/CardHeader";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import Grid from "@material-ui/core/Grid";
// import StarIcon from "@material-ui/icons/StarBorder";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const usePriceStyles = makeStyles((theme) => ({
  //   "@global": {
  //     ul: {
  //       margin: 0,
  //       padding: 0,
  //       listStyle: "none",
  //     },
  //   },

  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  //   cardHeader: {
  //     backgroundColor:
  //       theme.palette.type === "light"
  //         ? theme.palette.grey[200]
  //         : theme.palette.grey[700],
  //   },
  //   cardPricing: {
  //     display: "flex",
  //     justifyContent: "center",
  //     alignItems: "baseline",
  //     marginBottom: theme.spacing(2),
  //   },
}));

// const tiers = [
//   {
//     title: "Free",
//     price: "0",
//     description: [
//       "10 users included",
//       "2 GB of storage",
//       "Help center access",
//       "Email support",
//     ],
//     buttonText: "GET STARTED",
//     buttonVariant: "outlined",
//   },
//   {
//     title: "Pro",
//     subheader: "Most popular",
//     price: "15",
//     description: [
//       "20 users included",
//       "10 GB of storage",
//       "Help center access",
//       "Priority email support",
//     ],
//     buttonText: "GET STARTED",
//     buttonVariant: "contained",
//   },
//   {
//     title: "Enterprise",
//     price: "30",
//     description: [
//       "50 users included",
//       "30 GB of storage",
//       "Help center access",
//       "Phone & email support",
//     ],
//     buttonText: "GET STARTED",
//     buttonVariant: "outlined",
//   },
// ];

export default function Pricing() {
  const history = useHistory();
  const handleOnClick = useCallback(() => history.push("/dash"), [history]);

  const classesPrice = usePriceStyles();

  return (
    <div>
      <Container
        maxWidth="sm"
        component="main"
        className={classesPrice.heroContent}
      >
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Select your plan
        </Typography>
      </Container>
      <PricingTable highlightColor="#1976D2">
        <PricingSlot
          onClick={handleOnClick}
          buttonText="TRY IT FREE"
          title="FREE"
          priceText="$0/month"
        >
          <PricingDetail>
            {" "}
            <b>15</b> projects
          </PricingDetail>
          <PricingDetail>
            {" "}
            <b>5 GB</b> storage
          </PricingDetail>
          <PricingDetail>
            {" "}
            <b>5</b> users
          </PricingDetail>
          <PricingDetail strikethrough>
            {" "}
            <b>Time tracking</b>
          </PricingDetail>
        </PricingSlot>
        <PricingSlot
          highlighted
          onClick={handleOnClick}
          buttonText="GET STARTED"
          title="BASIC"
          priceText="$24/month"
        >
          <PricingDetail>
            {" "}
            <b>35</b> projects
          </PricingDetail>
          <PricingDetail>
            {" "}
            <b>15 GB</b> storage
          </PricingDetail>
          <PricingDetail>
            {" "}
            <b>Unlimited</b> users
          </PricingDetail>
          <PricingDetail>
            {" "}
            <b>Time tracking</b>
          </PricingDetail>
        </PricingSlot>
        <PricingSlot
          onClick={handleOnClick}
          buttonText="GET STARTED"
          title="PROFESSIONAL"
          priceText="$99/month"
        >
          <PricingDetail>
            {" "}
            <b>100</b> projects
          </PricingDetail>
          <PricingDetail>
            {" "}
            <b>30 GB</b> storage
          </PricingDetail>
          <PricingDetail>
            {" "}
            <b>Unlimited</b> users
          </PricingDetail>
          <PricingDetail>
            {" "}
            <b>Time tracking</b>
          </PricingDetail>
        </PricingSlot>
        <PricingSlot
          onClick={handleOnClick}
          buttonText="GET STARTED"
          title="ENTERPRISE"
          priceText="$200/month"
        >
          <PricingDetail>
            {" "}
            <b>Unlimited</b> projects
          </PricingDetail>
          <PricingDetail>
            {" "}
            <b>75 GB</b> storage
          </PricingDetail>
          <PricingDetail>
            {" "}
            <b>Unlimited</b> users
          </PricingDetail>
          <PricingDetail>
            {" "}
            <b>Time tracking</b>
          </PricingDetail>
        </PricingSlot>
      </PricingTable>
    </div>
  );

  //   return (
  //     <React.Fragment>
  //       <CssBaseline />
  //       <Container
  //         maxWidth="sm"
  //         component="main"
  //         className={classesPrice.heroContent}
  //       >
  //         <Typography
  //           component="h1"
  //           variant="h2"
  //           align="center"
  //           color="textPrimary"
  //           gutterBottom
  //         >
  //           Select your plan
  //         </Typography>
  //       </Container>
  //       {/* End hero unit */}
  //       <Container maxWidth="md" component="main">
  //         <Grid container spacing={5} alignItems="flex-end">
  //           {tiers.map((tier) => (
  //             // Enterprise card is full width at sm breakpoint
  //             <Grid
  //               item
  //               key={tier.title}
  //               xs={12}
  //               sm={tier.title === "Enterprise" ? 12 : 6}
  //               md={4}
  //             >
  //               <Card>
  //                 <CardHeader
  //                   title={tier.title}
  //                   subheader={tier.subheader}
  //                   titleTypographyProps={{ align: "center" }}
  //                   subheaderTypographyProps={{ align: "center" }}
  //                   action={tier.title === "Pro" ? <StarIcon /> : null}
  //                   className={classesPrice.cardHeader}
  //                 />
  //                 <CardContent>
  //                   <div className={classesPrice.cardPricing}>
  //                     <Typography component="h2" variant="h3" color="textPrimary">
  //                       ${tier.price}
  //                     </Typography>
  //                     <Typography variant="h6" color="textSecondary">
  //                       /mo
  //                     </Typography>
  //                   </div>
  //                   <ul>
  //                     {tier.description.map((line) => (
  //                       <Typography
  //                         component="li"
  //                         variant="subtitle1"
  //                         align="center"
  //                         key={line}
  //                       >
  //                         {line}
  //                       </Typography>
  //                     ))}
  //                   </ul>
  //                 </CardContent>
  //                 <CardActions>
  //                   <Button
  //                     fullWidth
  //                     variant={tier.buttonVariant}
  //                     color="primary"
  //                     onClick={handleOnClick}
  //                   >
  //                     {tier.buttonText}
  //                   </Button>
  //                 </CardActions>
  //               </Card>
  //             </Grid>
  //           ))}
  //         </Grid>
  //       </Container>
  //     </React.Fragment>
  //   );
}
