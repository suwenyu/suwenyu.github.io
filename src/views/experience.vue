<template>
  <div class="container">
    <p class="header" id="Timeline" style="text-align: center;">Experience</p>

    <div class="media">
      <img src="static/images/newsbreak.png" class="bd-placeholder-img align-self-start mr-3" style="width:64px; height:64px;" alt="...">
      <div class="media-body">
        <p class="title"><strong>Particle Media, Inc.</strong> - Mountain View, CA, USA</p>
        <div class="row">
          <div class="col-md-4">Machine Learning Intern</div>
          <div class="col-md-4 offset-md-4">May.2019 - Aug.2019</div>
        </div>
        <div class="row" style="padding-left:12px">
          <sui-label> Recommendation System </sui-label>
          <sui-label> XGBoost </sui-label>
          <sui-label> Word2Vec </sui-label>
          <sui-label> Tensorflow </sui-label>
        </div>

        <ul>
          <li>Applied embedding similarity features by training word2vec to improve disambiguation of names for US cities and counties with F1 measure of 78.48 percent</li>
          <li>Implemented XGboost model to recommend the news to users living in the most related area with relevance scores</li>
          <li>Built the data pipeline for the push-notification system with extracted time and action with predicted event type by
using SUTime and the dependency parser and resulted in increasing CTR with 10 percent on A/B Test</li>
        </ul>
      </div>
    </div>
    

    <div class="media">
      <img src="static/images/uic.png" class="bd-placeholder-img align-self-start mr-3" style="width:64px; height:64px;" alt="...">
      <div class="media-body">
        <p class="title"><strong>University of Illinois, Chicago</strong> - Chicago, IL, USA</p>
        <div class="row">
          <div class="col-md-4">Research Assistant</div>
          <div class="col-md-4 offset-md-4">Mar.2019 - May.2019</div>
        </div>

        <div class="row" style="padding-left:12px">
          <sui-label> Text Classification </sui-label>
          <sui-label> LSTM </sui-label>
        </div>
          
        <ul>
            <li>Implemented Hierarchical LSTM which combined the word embedding sequence and the clause embedding to achieve high accuracy of 78.6 percent on classification task with 4 labels on Twitter HPV-related articles</li>
            <li>Compared effectiveness of the semantic representation by applying latent semantic analysis, W2V, and FastText on the different level of words in HPV-vaccine-related data </li>
        </ul>
      </div>
    </div>

    <div class="media">
      <img src="static/images/cathay.png" class="bd-placeholder-img align-self-start mr-3" style="width:64px; height:64px;" alt="...">
      <div class="media-body">
        <p class="title"><strong>Cathay Financial Holding Co. Ltd.</strong> - Taipei, Taiwan</p>
        <div class="row">
          <div class="col-md-4">Machine Learning Intern</div>
          <div class="col-md-4 offset-md-4">Aug.2017 - May.2018</div>
          <p></p>
        </div>
        <div class="row" style="padding-left:12px">
          <sui-label> Recommendation System </sui-label>
          <sui-label> XGBoost </sui-label>
          <sui-label> Deep-Wide Model </sui-label>
        </div>

        <ul>
            <li>Applied Lambdamart model on financial data such as financial behavior of users, truncation record, and customer profiles to find important features </li>
            <li>Implemented the Deep-Wide model to predicted the average variation in the amount of credit card transaction of customers and the features from XGBoost with a high accuracy</li>
        </ul>
      </div>
    </div>

    <div class="media">
      <img src="static/images/nccu.jpg" class="bd-placeholder-img align-self-start mr-3" style="width:64px; height:64px;" alt="...">
      <div class="media-body">
        <p class="title"><strong>National Chengchi University and Academia Sinica</strong> - Taipei, Taiwan </p>
        <div class="row">
          <div class="col-md-4">Research Assistant</div>
          <div class="col-md-4 offset-md-4">Aug.2017 - May.2018</div>
          <p></p>
        </div>
        <div class="row" style="padding-left:12px">
          <sui-label> Text Classification </sui-label>
          <sui-label> LSTM </sui-label>
          <sui-label> Full Stack </sui-label>
        </div>

        <ul>
            <li>Emphasized risk detecting for word-level financial reports by training a self-attention LSTM model on the collection of financial reports with financial sentiment phrases, resulting in high accuracy of 88 percent <strong>(ICASSP’20, 2nd author)</strong> </li>
            <li>Built a labeling system by using Flask framework, JavaScript and MongoDB for users to add annotations of multiword expressions for financial reports with visualization which increased the efficiency of labeling</li>
            <li>Visualized the financial statement by highlighting the strong words which the deep learning model learned</li>
        </ul>
      </div>
    </div>

    
</div>
    
</template>