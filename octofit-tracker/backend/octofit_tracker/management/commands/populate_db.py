from django.core.management.base import BaseCommand
from django.conf import settings
import pymongo

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'

    def handle(self, *args, **options):
        client = pymongo.MongoClient('localhost', 27017)
        db = client['octofit_db']

        # Clear existing data
        db.users.drop()
        db.teams.drop()
        db.activity.drop()
        db.leaderboard.drop()
        db.workouts.drop()

        # Insert test users
        users = [
            {'username': 'octofituser1', 'email': 'user1@example.com'},
            {'username': 'octofituser2', 'email': 'user2@example.com'},
            {'username': 'octofituser3', 'email': 'user3@example.com'},
        ]
        db.users.insert_many(users)

        # Insert test teams
        teams = [
            {'name': 'OctoFit Team A', 'members': ['octofituser1', 'octofituser2']},
            {'name': 'OctoFit Team B', 'members': ['octofituser3']},
        ]
        db.teams.insert_many(teams)

        # Insert test activities
        activities = [
            {'user': 'octofituser1', 'type': 'running', 'duration': 30},
            {'user': 'octofituser2', 'type': 'cycling', 'duration': 45},
        ]
        db.activity.insert_many(activities)

        # Insert test workouts
        workouts = [
            {'name': 'Morning Run', 'description': '5km run', 'duration': 30},
            {'name': 'Cycling Sprint', 'description': '10km cycle', 'duration': 45},
        ]
        db.workouts.insert_many(workouts)

        # Insert leaderboard data
        leaderboard = [
            {'user': 'octofituser1', 'score': 100},
            {'user': 'octofituser2', 'score': 80},
            {'user': 'octofituser3', 'score': 60},
        ]
        db.leaderboard.insert_many(leaderboard)

        self.stdout.write(self.style.SUCCESS('Successfully populated the octofit_db database with test data'))
