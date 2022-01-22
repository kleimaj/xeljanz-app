var app = angular.module('Xeljanz-App', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.when('', '/');
    $urlRouterProvider.otherwise('/');
  
    $locationProvider.html5Mode({
      enabled: false,
    });

    $stateProvider
        .state('LANDING-PAGE', {
            url: '/',
            templateUrl: 'landing-page.html',
        })
        .state('MOA', {
            url: '/moa',
            templateUrl: 'content/moa/moa.html',
        })
        .state('CT', {
            url: '/clinical-trials',
            templateUrl: 'content/ct/ct-landing.html'
        })
        .state ('STUDY-DESIGN', {
            url: '/clinical-trials/main',
            templateUrl: 'content/ct/main.html',
            controller: 'ctCtrl',
            params: {
                slideIndex: 0
            }
        })
        .state ('ENDPOINTS', {
            url: '/clinical-trials/main',
            templateUrl: 'content/ct/main.html',
            controller: 'ctCtrl',
            params: {
                slideIndex: 1
            }
        })
        .state ('SECONDARY-SAFETY-ENDPOINTS', {
            url: '/clinical-trials/main',
            templateUrl: 'content/ct/main.html',
            controller: 'ctCtrl',
            params: {
                slideIndex: 2
            }
        })
        .state ('PATIENT-DEMOGRAPHICS', {
            url: '/clinical-trials/main',
            templateUrl: 'content/ct/main.html',
            controller: 'ctCtrl',
            params: {
                slideIndex: 3
            }
        })
        .state ('PHASE-PK-ANALYSIS', {
            url: '/clinical-trials/main',
            templateUrl: 'content/ct/main.html',
            controller: 'ctCtrl',
            params: {
                slideIndex: 4
            }
        })
        .state ('DOSAGE-REGIMEN', {
            url: '/clinical-trials/dosage-regimen',
            templateUrl: 'content/ct/study-design/dosage-regimen.html'
        })
        .state ('STATISTICAL-ANALYSIS', {
            url: '/clinical-trials/statistical-analysis',
            templateUrl: 'content/ct/study-design/statistical-analysis.html'
        })
        .state ('PATIENT-DISPOSITION', {
            url: '/clinical-trials/patient-disposition',
            templateUrl: 'content/ct/study-design/patient-disposition.html'
        })
        .state ('JIA-CATEGORIES', {
            url: '/clinical-trials/jia-categories',
            templateUrl: 'content/ct/study-design/jia-categories.html'
        })
});

app.controller("ctCtrl", function ($scope, $state, $stateParams) {
    initSwiper($stateParams.slideIndex);
});

function initSwiper (slideIndex) {
    var swiper = new Swiper('.mySwiper', {
        initialSlide: slideIndex,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet: function (index, className) {
            return `<span class="` + className + `"></span>`;
          },
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
      swiper.on('slideChange', function () {
        if (swiper.isEnd)
          document.querySelector('.review-btn').classList.remove('vis-hidden');
        else {
          document.querySelector('.review-btn').classList.add('vis-hidden');
        }
      });
      
}