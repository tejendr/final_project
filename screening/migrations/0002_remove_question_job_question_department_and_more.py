# Generated by Django 5.0.3 on 2024-04-26 22:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('screening', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='question',
            name='job',
        ),
        migrations.AddField(
            model_name='question',
            name='department',
            field=models.CharField(default=1, max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='question',
            name='location',
            field=models.CharField(default=1, max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='question',
            name='position',
            field=models.CharField(default=1, max_length=100),
            preserve_default=False,
        ),
    ]
